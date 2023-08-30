import { Colors, scale } from "@src/styles";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CTAButton from "../buttons/cta-button";
import SelectedCarItem from "../selected-car-item/selected-car-item";
import { useEffect } from "react";

type Props = {
	data?: ({
		year: number;
	} & ModelByMakeAndYear)[];
	onAddVehicle?: () => void;
};

const defaultValues = {
	data: [],
};

/**
 * # SelectedCarList
 *
 * @component
 * @description Component that render a list of selected cars.
 * If there is no selected cars it will render a CTA button to add a new vehicle.
 * @category Components - Templates
 * @version 1.0.0
 */
const SelectedCarList = ({ data = defaultValues.data, onAddVehicle }: Props) => {
	const selectedTitle = "Currently Shopping for:";
	const savedTitle = "Saved Vehicles:";

	useEffect(() => {}, [data.length]);

	if (data.length === 0) {
		return (
			<View style={styles.voidListContent}>
				<CTAButton title="Add vehicle" onPress={onAddVehicle} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
			>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>{selectedTitle}</Text>
				</View>
				<SelectedCarItem
					isSelected={true}
					year={data[0].year}
					make={data[0].Make_Name}
					model={data[0].Model_Name}
				/>
				{data.length > 1 ? (
					<View style={styles.titleWrapper}>
						<Text style={styles.title}>{savedTitle}</Text>
					</View>
				) : null}
				{data.map((item, index) => {
					if (index === 0) return null;
					return (
						<SelectedCarItem
							key={item.Model_ID}
							isSelected={false}
							year={item.year}
							make={item.Make_Name}
							model={item.Model_Name}
						/>
					);
				})}
			</ScrollView>

			<View style={styles.cta}>
				<CTAButton title="Add vehicle" onPress={onAddVehicle} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.off_white,
	},
	voidListContent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	contentContainer: {
		paddingTop: scale(80, "y"),
		alignItems: "center",
		gap: scale(12, "y"),
		paddingBottom: scale(160, "y"),
	},
	title: {
		fontSize: scale(20, "x"),
		fontWeight: "500",
		lineHeight: scale(32, "x"),
	},
	titleWrapper: {
		width: scale(344, "x"),
	},
	cta: {
		position: "absolute",
		bottom: scale(48, "y"),
		left: 0,
		right: 0,
		alignItems: "center",
	},
});

export default SelectedCarList;
