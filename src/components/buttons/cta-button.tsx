import { Colors, scale } from "@src/styles";
import getPressedStyles from "@src/styles/get-pressed-style";
import { View, Text, StyleSheet, PressableProps, Pressable } from "react-native";
import CarIcon from "../icons/car-icon";
import RightChevronIcon from "../icons/right-chevron-icon";
import { elevations } from "@src/styles/elevations";

type Props = {
	title: string;
} & PressableProps;

/**
 * # CTAButton
 * @component
 * @description  Call to action button to start adding the a new vehicle.
 * @category Components - Buttons
 * @version 1.0.0
 */
const CTAButton = ({ title = "CTA Button", ...props }: Props) => (
	<Pressable
		style={getPressedStyles([styles.container, elevations[1]], elevations[0])}
		{...props}
	>
		<CarIcon />
		<View style={styles.caption}>
			<Text style={styles.text}>{title}</Text>
			<RightChevronIcon stroke={Colors.grey} />
		</View>
	</Pressable>
);

const styles = StyleSheet.create({
	container: {
		width: scale(344, "x"),
		height: scale(56, "y"),
		borderRadius: scale(8, "x"),
		backgroundColor: Colors.white,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: scale(40, "x"),
	},
	caption: {
		flexDirection: "row",
		gap: scale(12, "x"),
	},
	text: {
		fontSize: scale(14, "x"),
		// lineHeight: scale(14, "x"),
		fontWeight: "500",
		color: Colors.grey,
	},
});

export default CTAButton;
