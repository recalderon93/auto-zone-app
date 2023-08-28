import type { StackNavigationProp } from "@react-navigation/stack";

export type RootStackScreens = {
	Home: undefined;
}

export type HomeNavigationProps = StackNavigationProp<RootStackScreens, "Home">;