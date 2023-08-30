import CTAButton from "@src/components/buttons/cta-button";
import "@testing-library/jest-native";
import { cleanup, fireEvent, render, screen } from "@testing-library/react-native";

describe("@Components/buttons/CTAButton", () => {
	const mockCB = jest.fn();
	beforeEach(() => {
		cleanup();
		mockCB.mockReset();
	});

	test("Should Render", () => {
		render(<CTAButton title="Button" />);
		expect(screen.toJSON()).not.toBeNull();
	});

	test("Should Render with title", () => {
		render(<CTAButton title="Button" />);
		expect(screen.getByText("Button")).not.toBeNull();
	});

	test("Callback should be called", () => {
		const buttonID = "button";
		render(<CTAButton title="Button" onPress={mockCB} testID={buttonID} />);
		// Query
		const button = screen.getByTestId(buttonID);
		//assert
		expect(mockCB).not.toHaveBeenCalled();

		// Act
		fireEvent.press(button);

		// Assert
		expect(mockCB).toHaveBeenCalledTimes(1);
	});
});
