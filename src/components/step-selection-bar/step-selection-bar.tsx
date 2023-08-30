/* eslint-disable @typescript-eslint/ban-ts-comment */
import { View, Text, StyleSheet, Pressable } from "react-native";
import CloseIcon from "../icons/close-icon";
import BackArrowIcon from "../icons/back-arrow-icon";
import { Colors, scale } from "@src/styles";
import { elevations } from "@src/styles/elevations";
import getPressedStyles from "@src/styles/get-pressed-style";

type Props = {
	/**
	 * Array of string indicating the name of the current state.
	 */
	steps?: string[];
	selectionBySteps?: Array<string | null>;
	/**
	 * The index of the current step.
	 */
	currentStepIndex?: number;
	/**
	 * Callback function to go back to the previous step.
	 */
	onGoBack?: () => void;
	/**
	 * Callback function to close the form, if the current step index is 0;
	 */
	onCloseForm?: () => void;
};

const defaultValues = {
	steps: [],
	selectionBySteps: [],
	currentStepIndex: 0,
};
const StepsSelectionBar = ({
	onCloseForm,
	onGoBack,
	currentStepIndex = defaultValues.currentStepIndex,
	steps = defaultValues.steps,
	selectionBySteps = defaultValues.selectionBySteps,
}: Props) => (
	<View style={[styles.container, elevations[1]]}>
		<Pressable
			accessibilityRole="button"
			onPress={currentStepIndex === 0 ? onCloseForm : onGoBack}
			style={getPressedStyles([
				{ backgroundColor: Colors.white, borderRadius: 10, margin: scale(8, "x") },
			])}
		>
			{currentStepIndex === 0 ? <CloseIcon /> : <BackArrowIcon />}
		</Pressable>
		{steps.map((item, index) => (
			<View
				key={item}
				accessibilityLabel={item}
				accessibilityState={{ selected: currentStepIndex === index }}
				style={
					currentStepIndex === index
						? [styles.item, styles.itemSelected, elevations[0]]
						: styles.item
				}
			>
				<Text style={styles.text}>{item}</Text>
				{selectionBySteps[index] ? (
					<Text
						accessibilityLabel={`selected ${item}: ${selectionBySteps[index]}`}
						style={styles.selectionText}
						numberOfLines={1}
					>
						{selectionBySteps[index]}
					</Text>
				) : null}
			</View>
		))}
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: scale(390, "x"),
		flexDirection: "row",
		paddingHorizontal: scale(22, "x"),
		gap: scale(12, "x"),
		backgroundColor: Colors.white,
		paddingTop: scale(8, "y"),
	},
	item: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	itemSelected: {
		borderBottomWidth: scale(1, "x"),
		borderBottomColor: Colors.secondary,
		backgroundColor: Colors.white,
	},
	text: {
		fontWeight: "600",
		letterSpacing: scale(1, "x"),
	},
	selectionText: {
		fontWeight: "400",
		color: Colors.grey,
		fontSize: scale(10, "xy"),
	},
});

export default StepsSelectionBar;
