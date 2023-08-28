import { HomeNavigationProps } from "@src/navigation/routes";
import { View, Text, StyleSheet } from "react-native";

type Props = {
	navigation: HomeNavigationProps;
};

const HomeScreen = ({ navigation }: Props) => {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default HomeScreen;
