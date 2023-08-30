import SelectedCarItem from "@src/components/selected-car-item/selected-car-item";
import { Colors } from "@src/styles";
import "@testing-library/jest-native";
import { cleanup, render, screen } from "@testing-library/react-native";

describe("@Components/SelectedCarItem", () => {
	beforeEach(() => {
		cleanup();
	});

	test("Should render the component", () => {
		render(<SelectedCarItem />);

		expect(screen.toJSON()).not.toBeNull();
	});

	test("If the prop isSelected is true, the component should have the accessibilityState selected true", () => {
		// Render
		const testID = "selected-car-item";
		render(<SelectedCarItem isSelected testID={testID} />);
		// Query
		const item = screen.getByTestId(testID);
		// Assert
		expect(item).toHaveAccessibilityState({ selected: true });
	});

	test("If the prop isSelected is false, the component should have the accessibilityState selected false", () => {
		// Render
		const testID = "selected-car-item";
		render(<SelectedCarItem testID={testID} />);
		// Query
		const item = screen.getByTestId(testID);
		// Assert
		expect(item).toHaveAccessibilityState({ selected: false });
	});

	test("Check car icon is rendered with the correct selectedState with isSelected=true", () => {
		// Render
		render(<SelectedCarItem isSelected />);

		// Query
		const carIcon = screen.getByTestId("car-icon");
		const checkMark = screen.getByTestId("check-mark");

		// Assert
		expect(carIcon).not.toBeNull();
		expect(checkMark).not.toBeNull();
	});

	test("Check car icon is rendered with the correct selectedState with isSelected=false", () => {
		// Render
		render(<SelectedCarItem />);

		// Query
		const carIcon = screen.getByTestId("car-icon");
		const checkMark = screen.queryByTestId("check-mark");

		// Assert
		expect(carIcon).not.toBeNull();
		expect(checkMark).toBeNull();
	});

	test("Check the stroke color of the car icon is correct with isSelected=true", () => {
		// Render
		const testID = "selected-car-item";
		render(<SelectedCarItem isSelected testID={testID} />);

		// Query
		const carIcon = screen.getByTestId(testID);

		// Assert
		expect(carIcon).toHaveStyle({ borderLeftColor: Colors.secondary });
		screen.debug();
	});

	test("Check the stroke color of the car icon is correct with isSelected=false", () => {
		// Render
		const testID = "selected-car-item";
		render(<SelectedCarItem testID={testID} />);

		// Query
		const carIcon = screen.getByTestId(testID);

		// Assert
		expect(carIcon).toHaveStyle({ borderLeftColor: Colors.grey });
		screen.debug();
	});
});
