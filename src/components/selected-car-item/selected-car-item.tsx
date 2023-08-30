import { Colors, scale } from "@src/styles";
import { useMemo } from "react";
import { View, Text, StyleSheet, ViewProps } from "react-native";
import CarIcon from "../icons/car-icon";
import { elevations } from "@src/styles/elevations";

type Props = {
	isSelected?: boolean;
	year?: number | null;
	make?: string | null;
	model?: string | null;
} & ViewProps;

const SelectedCarItem = ({
	isSelected = false,
	year = null,
	make = null,
	model = null,
	...props
}: Props) => {
	const styles = useStyles(isSelected);

	const caption = useMemo(
		() => `${year ? year + " " : ""}${make ? make + " " : ""}${model ? model + " " : ""}`,
		[year, make, model]
	);

	const label = {
		selected: `Selected Car: ${caption}`,
		saved: ` Saved Car: ${caption}`,
	};
	return (
		<View
			accessible
			accessibilityLabel={isSelected ? label.selected : label.saved}
			accessibilityState={{ selected: isSelected }}
			style={[styles.container, elevations[1]]}
			{...props}
		>
			<CarIcon isChecked={isSelected} size={40} testID="car-icon" />
			<Text
				accessibilityRole="text"
				style={styles.label}
				numberOfLines={2}
				ellipsizeMode="tail"
			>
				{caption}
			</Text>
		</View>
	);
};

const useStyles = (isSelected: boolean) =>
	useMemo(
		() =>
			StyleSheet.create({
				container: {
					width: scale(344, "x"),
					height: scale(72, "y"),
					borderRadius: scale(8, "x"),
					borderLeftColor: isSelected ? Colors.secondary : Colors.grey,
					borderLeftWidth: scale(3, "xy"),
					paddingHorizontal: scale(32, "x"),
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					backgroundColor: Colors.white,
					gap: scale(16, "x"),
				},
				label: {
					flex: 1,
					fontSize: scale(12, "y"),
					color: Colors.grey,
					lineHeight: scale(18, "y"),
					fontWeight: "500",
				},
			}),
		[isSelected]
	);
export default SelectedCarItem;
