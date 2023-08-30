import "@testing-library/jest-native";
import { cleanup, fireEvent, render, screen } from "@testing-library/react-native";
import SelectionListItem from "@src/components/selection-list-item/selection-list-item";
import { Colors } from "@src/styles";

describe("@component/SelectionListItem", () => {
	const caption = "Ford";
	const mockedCB = jest.fn();
	beforeEach(() => {
		cleanup();
		jest.clearAllMocks();
	});

	test("Should Render", () => {
		render(<SelectionListItem caption={caption} />);
		expect(screen.toJSON()).not.toBeNull();
	});

	test("Check the caption is correctly rendered", () => {
		render(<SelectionListItem caption={caption} />);

		expect(screen.getByText(caption)).not.toBeNull();
	});

	test("Check the base styles are correctly applied", () => {
		const testID = "selection-list-item";
		render(<SelectionListItem caption={caption} testID={testID} />);

		const selectionListItem = screen.getByTestId(testID);
		const itemCaption = screen.getByText(caption);

		expect(selectionListItem).toHaveStyle({
			backgroundColor: Colors.white,
		});

		expect(itemCaption).toHaveStyle({
			color: Colors.black,
		});
	});

	test("Check the styles when the component has the isSelected prop set to true", () => {
		const testID = "selection-list-item";
		render(<SelectionListItem caption={caption} isSelected testID={testID} />);
		const selectionListItem = screen.getByTestId(testID);
		const itemCaption = screen.getByText(caption);

		expect(selectionListItem).toHaveStyle({
			backgroundColor: Colors.secondary,
		});

		expect(itemCaption).toHaveStyle({
			color: Colors.white,
		});
	});

	test("Check if the supplied callback is called when the component is pressed", () => {
		const testID = "selection-list-item";
		render(<SelectionListItem caption={caption} onPress={mockedCB} testID={testID} />);
		const selectionListItem = screen.getByTestId(testID);

		fireEvent.press(selectionListItem);

		expect(mockedCB).toHaveBeenCalledTimes(1);
	});
});
