import MakesList from "@src/components/lists/makes-list";
import ModelsList from "@src/components/lists/models-list";
import YearList from "@src/components/lists/year-list";
import ScreenTemplate from "@src/components/screen-template/screen-template";
import StepsSelectionBar from "@src/components/step-selection-bar/step-selection-bar";
import { SelectionFormNavigationProps } from "@src/navigation/routes";
import useStore from "@src/store/store";
import { Colors, scale } from "@src/styles";
import { useEffect, useRef } from "react";
import { ActivityIndicator, Platform, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type Props = {
	navigation: SelectionFormNavigationProps;
};

const CarSelectionScreen = ({ navigation }: Props) => {
	const onCloseForm = () => navigation.navigate("Main");
	const loading = useStore(st => st.loader);
	const steps = useStore(st => st.steps);
	const currentStepIndex = useStore(st => st.currentStepIndex);
	const yearsList = useStore(st => st.yearsList);
	const makeList = useStore(st => st.makeList);
	const modelList = useStore(st => st.modelList);
	const onGoBack = useStore(st => st.onGoBackFromStep);
	const onSelectYear = useStore(st => st.onSelectYear);
	const onSelectMakeId = useStore(st => st.onSelectMakeId);
	const onSelectModel = useStore(st => st.onSelectModel);
	const onResetSelection = useStore(st => st.resetSelection);

	/** Refs */
	const horizontalSlider = useRef<FlatList<number>>(null);
	const isRender = useRef(false);

	useEffect(() => {
		/**
		 * Added to avoid rendered issues, related to the initial
		 * layout calculation of the horizontal FlatList
		 */
		if (!isRender.current) return;

		horizontalSlider.current?.scrollToIndex({ index: currentStepIndex, animated: true });
	}, [currentStepIndex]);

	useEffect(() => {
		isRender.current = true;
	}, []);

	return (
		<ScreenTemplate>
			<StepsSelectionBar
				steps={steps}
				currentStepIndex={currentStepIndex}
				onCloseForm={onCloseForm}
				onGoBack={onGoBack}
			/>
			<FlatList<number>
				ref={horizontalSlider}
				horizontal
				showsHorizontalScrollIndicator={false}
				scrollEnabled={false}
				data={Array.from({ length: steps.length })}
				renderItem={({ item, index }) => {
					if (index === 0) {
						return (
							<YearList
								data={yearsList}
								isCurrentList={true}
								onSelectYear={item => onSelectYear(item)}
							/>
						);
					}
					if (index === 1) {
						return (
							<View style={styles.sliderItem}>
								<MakesList
									key={steps[index]}
									data={makeList}
									onSelectMakeId={makeId => onSelectMakeId(makeId)}
									isCurrent={currentStepIndex === index}
									onGoBack={onResetSelection}
								/>
							</View>
						);
					}
					if (index === 2) {
						return (
							<ModelsList
								key={steps[index]}
								data={modelList}
								isCurrent={currentStepIndex === index}
								onGoBack={onResetSelection}
								onSelectModel={item => {
									onSelectModel(item);
									navigation.navigate("Main");
								}}
							/>
						);
					}

					return null;
				}}
			/>
			{loading ? (
				<View style={styles.loaderContainer}>
					<ActivityIndicator
						size={Platform.OS === "android" ? 30 : "large"}
						color={Colors.primary}
					/>
				</View>
			) : null}
		</ScreenTemplate>
	);
};

const styles = StyleSheet.create({
	loaderContainer: {
		position: "absolute",
		zIndex: 2,
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: `${Colors.black}1f`,
		justifyContent: "center",
		alignItems: "center",
	},
	sliderItem: {
		width: scale(390, "x"),
		height: "100%",
		backgroundColor: Colors.off_white,
	},
});

export default CarSelectionScreen;
