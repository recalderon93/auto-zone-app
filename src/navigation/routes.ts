import type { StackNavigationProp } from "@react-navigation/stack";

export type RootStackScreens = {
	Main: undefined;
	SelectionForm: undefined;
};

export type HomeNavigationProps = StackNavigationProp<RootStackScreens,"Main">;

export type SelectionFormNavigationProps = StackNavigationProp<RootStackScreens,"SelectionForm">;
