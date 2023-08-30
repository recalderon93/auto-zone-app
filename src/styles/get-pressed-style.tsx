import { PressableStateCallbackType, ViewStyle, StyleProp } from "react-native";

export default function getPressedStyles(
	baseStyle: StyleProp<ViewStyle> = {} as StyleProp<ViewStyle>,
	pressedStyle: StyleProp<ViewStyle> = {} as StyleProp<ViewStyle>
) {
	return (state: PressableStateCallbackType) => {
		if (state.pressed) {
			return [baseStyle, pressedStyle, { opacity: 0.7 }];
		}
		return baseStyle;
	};
}
