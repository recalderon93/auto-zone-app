import CarIcon from "@src/components/icons/car-icon";
import "@testing-library/jest-native";
import { cleanup, render, screen } from "@testing-library/react-native";

describe("@Component/Icons/CarIcon", () => {
	beforeEach(() => {
		cleanup();
	});

	test("Render Car Icon", () => {
		render(<CarIcon />);
		expect(screen.toJSON()).not.toBeNull();
	});

	test("Check isChecked=false state for Car Icon", () => {
		render(<CarIcon />);

		expect(screen.queryByTestId("check-mark")).toBeNull();
	});

	test("Check isChecked=true state for Car Icon", () => {
		render(<CarIcon isChecked />);
		expect(screen.queryByTestId("check-mark")).not.toBeNull();
	});
});
