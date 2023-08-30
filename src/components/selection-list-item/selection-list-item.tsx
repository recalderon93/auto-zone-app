/* eslint-disable react-hooks/exhaustive-deps */
import { Colors, scale } from "../../styles";
import { elevations } from "../../styles/elevations";
import getPressedStyles from "../../styles/get-pressed-style";
import { useMemo } from "react";
import { Text, StyleSheet, PressableProps, Pressable } from "react-native";

type Props = {
	isSelected?: boolean;
	caption: string;
} & PressableProps;

/**
 * # SelectionListItem
 *
 * @component
 * @description A component that renders a list item with a caption.
 * @category Component - List item
 * @version 1.0.0
 */
const SelectionListItem = ({ caption, isSelected, ...props }: Props) => {
	const buttonBaseStyles = [styles.container, elevations[1]];
	const buttonStyles = useMemo(
		() => (isSelected ? [...buttonBaseStyles, styles.pressedContainer] : buttonBaseStyles),
		[isSelected]
	);

	return (
		<Pressable
			style={getPressedStyles(buttonStyles, [styles.pressedContainer, elevations[0]])}
			{...props}
		>
			{({ pressed }) => (
				<Text style={pressed || isSelected ? styles.pressedText : styles.text}>
					{caption}
				</Text>
			)}
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		width: scale(390, "x"),
		justifyContent: "center",
		paddingHorizontal: scale(28, "x"),
		paddingVertical: scale(12, "y"),
		backgroundColor: Colors.white,
		borderBottomColor: Colors.off_white,
		borderBottomWidth: scale(1, "y"),
	},
	pressedContainer: {
		backgroundColor: Colors.secondary,
	},
	text: {
		fontWeight: "500",
		color: Colors.black,
	},
	pressedText: {
		fontWeight: "500",
		color: Colors.white,
	},
});

export default SelectionListItem;
