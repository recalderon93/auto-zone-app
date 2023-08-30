import { StyleSheet } from "react-native";
import { Colors } from "./constants";

/**
 * Elevation styles
 * 
 * @description Mapper to load elevation and Shadows styles.
 * To avoid alerts, before adding elevation styles, add backgroundColor to the component.
 * @example
 * import { elevations } from "./styles/elevations";
 * 
 * ...
 * <View style={[styles.container, elevations[1]} />
 * ...
 */
export const elevations = StyleSheet.create({
	0: {
		elevation: 0,
		shadowColor: Colors.shadow,
		shadowOpacity: 0,
		shadowRadius: 0,
		shadowOffset: {
			width: 0,
			height: 0,
		},
	},
	1: {
		elevation: 1,
		shadowColor: Colors.shadow,
		shadowOpacity: 0.2,
		shadowRadius: 1,
		shadowOffset: {
			width: 0,
			height: 1,
		},
	},
	2: {
		elevation: 2,
		shadowColor: Colors.shadow,
		shadowOpacity: 0.3,
		shadowRadius: 2,
		shadowOffset: {
			width: 0,
			height: 2,
		},
	},
	3: {
		elevation: 3,
		shadowColor: Colors.shadow,
		shadowOpacity: 0.4,
		shadowRadius: 3,
		shadowOffset: {
			width: 0,
			height: 3,
		},
	},
	4: {
		elevation: 4,
		shadowColor: Colors.shadow,
		shadowOpacity: 0.5,
		shadowRadius: 4,
		shadowOffset: {
			width: 0,
			height: 4,
		},
	},
	5: {
		elevation: 5,
		shadowColor: Colors.shadow,
		shadowOpacity: 0.6,
		shadowRadius: 6,
		shadowOffset: {
			width: 0,
			height: 6,
		},
	},
});
