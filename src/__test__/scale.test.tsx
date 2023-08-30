/* eslint-disable @typescript-eslint/ban-ts-comment */
import scale, { roundToNearestPixel } from "@src/styles/scale";

describe("styles/scale", () => {
	test("roundToNearesPixel", () => {
		const floatPixelMeassure = 0.5;
		const roundedPixel = roundToNearestPixel(floatPixelMeassure);

		expect(roundedPixel).toBe(1);
	});
	// Dimensions get method is added to the Jest Mocks, to be exactly the double of the ScreenBaseDimensions
	test("Scale By Y axis", () => {
		const value = 1;
		const scaleByY = scale(value, "y");
		expect(scaleByY).toBe(2 * value);
	});

	test("Scale By X axis", () => {
		const value = 1;
		const scaleByY = scale(value, "x");
		expect(scaleByY).toBe(2 * value);
	});

	test("Error on Invalid Value Input Type", () => {
		const value = "1";
		// @ts-ignore
		expect(() => scale(value)).toThrowError();
	});
});
