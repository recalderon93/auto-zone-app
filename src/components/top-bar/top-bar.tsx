import { Colors, scale } from "@src/styles";
import { useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AutoZoneLogo from "@components/icons/auto-zone-logo";
import { elevations } from "@src/styles/elevations";

const TopBar = () => {
	const { top } = useSafeAreaInsets();
	const styles = useStyles(top);
	return (
		<View
			accessible
			accessibilityLabel="App Header Bar"
			style={[styles.container, elevations[1]]}
		>
			<AutoZoneLogo size={230} />
		</View>
	);
};

const useStyles = (top: number) =>
	useMemo(
		() =>
			StyleSheet.create({
				container: {
					paddingTop: top + scale(20, "y"),
					paddingBottom: scale(20, "y"),
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: Colors.white,
				},
			}),
		[top]
	);

export default TopBar;
