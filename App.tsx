import "react-native-gesture-handler";
import Navigation from "./src/navigation/navigation";
import { Colors } from "./src/styles";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	return (
		<SafeAreaProvider style={styles.container}>
			<StatusBar style="auto" />
			<Navigation />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.off_white,
	},
});
