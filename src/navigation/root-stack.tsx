import { createStackNavigator } from "@react-navigation/stack";
import { RootStackScreens } from "./routes";
import MainScreen from "@src/screens/main-screen";
import CarSelectionScreen from "@src/screens/car-selection-screen";

const Stack = createStackNavigator<RootStackScreens>();

export const RootStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Main" component={MainScreen} />
			<Stack.Screen name="SelectionForm" component={CarSelectionScreen} />
		</Stack.Navigator>
	);
};
