
import { Dimensions, PixelRatio } from "react-native";
import { ScreenBaseDimensions } from "./constants";

/**
 * # roundToNearestPixel
 * @function
 * @param layoutSize - value that represent the size of the UI element.
 * @returns rounded value to the nearest pixel.
 */
export function roundToNearestPixel(layoutSize: number) {
	return Math.round(PixelRatio.roundToNearestPixel(layoutSize));
}

/**
 * # scale
 * 
 * @function
 * @param size size of the UI element.
 * @param axis indicates the axis to scale the UI element.
 * @returns scaled size of the UI element.
 */
export default function scale(size: number, axis: "x" | "y" | "xy") {
	if (typeof size !== "number") {
		throw new Error(`Size must be a number, received ${typeof size} instead.`);
	}

	const devicePixelRatio = PixelRatio.get();
	const widthScaleFactor = Dimensions.get("window").width / ScreenBaseDimensions.width;
	const heightScaleFactor = Dimensions.get("window").height / ScreenBaseDimensions.height;

	if (axis === "x") {
		const scaledSize = size * widthScaleFactor * (devicePixelRatio / PixelRatio.get());
		return roundToNearestPixel(scaledSize);
	}

	if (axis === "y") {
		const scaledSize = size * heightScaleFactor * (devicePixelRatio / PixelRatio.get());
		return roundToNearestPixel(scaledSize);
	}

	const scaleFactor = Math.min(widthScaleFactor, heightScaleFactor);
	const scaledSize = size * scaleFactor * (devicePixelRatio / PixelRatio.get());

	return roundToNearestPixel(scaledSize);
}
