import { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import TopBar from "../top-bar/top-bar";

/**
 * # ScreenTemplate
 *
 * @component
 * @description This component is a template for all screens in the app.
 * @category Component - Template - Screens
 * @version 1.0.0
 */
const ScreenTemplate = ({ children }: PropsWithChildren) => (
	<View style={styles.container}>
		<TopBar />
		<View style={styles.content}>{children}</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		flex: 1,
		position: "relative",
	},
});

export default ScreenTemplate;
