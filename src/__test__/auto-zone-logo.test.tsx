import "@testing-library/jest-native";
import { cleanup, render, screen } from "@testing-library/react-native";
import AutoZoneLogo, { defaultProps } from "@src/components/icons/auto-zone-logo";
import { scale } from "@src/styles";

describe("@Component/Icons/CarIcon", () => {
	beforeAll(() => {
		cleanup();
	});

	test("Render Car Icon", () => {
		render(<AutoZoneLogo />);
		expect(screen.toJSON()).not.toBeNull();
	});

	test("Check default size for AutoZoneLogo", () => {
		const testID = "auto-zone-logo";
		render(<AutoZoneLogo testID={testID} />);
		const autoZoneLogo = screen.getByTestId(testID);

		expect(autoZoneLogo.props.width).toBe(scale(defaultProps.size, "x"));
	});
});
