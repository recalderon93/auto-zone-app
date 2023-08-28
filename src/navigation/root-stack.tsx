import { createStackNavigator } from "@react-navigation/stack";
import { RootStackScreens } from "./routes";
import HomeScreen from "@src/screens/home-screen";

const Stack = createStackNavigator<RootStackScreens>();

export const RootStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
};
