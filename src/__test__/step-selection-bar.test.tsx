import "@testing-library/jest-native";
import { cleanup, fireEvent, render, screen } from "@testing-library/react-native";
import StepsSelectionBar from "@src/components/step-selection-bar/step-selection-bar";

describe("@Components/StepSelectionBar", () => {
	const steps = ["Step 1", "Step 2", "Step 3"];
	const onGoBack = jest.fn();
	const onCloseForm = jest.fn();

	beforeEach(() => {
		cleanup();
		jest.clearAllMocks();
	});

	test("Should Render", () => {
		render(<StepsSelectionBar />);
		expect(screen.toJSON()).not.toBeNull();
	});

	test("Should Render with steps", () => {
		render(<StepsSelectionBar steps={steps} />);

		// Query
		const step1 = screen.getByText(steps[0]);
		const step2 = screen.getByText(steps[1]);
		const step3 = screen.getByText(steps[2]);

		// Assert
		expect(step1).not.toBeNull();
		expect(step2).not.toBeNull();
		expect(step3).not.toBeNull();
	});

	test("Should Render with steps and current step index", () => {
		const currentStepIndex = 1;
		render(<StepsSelectionBar steps={steps} currentStepIndex={currentStepIndex} />);

		// Query
		const step = screen.getByLabelText(steps[currentStepIndex]);

		// Assert
		expect(step).toHaveAccessibilityState({ selected: true });

		expect(step).toHaveTextContent(steps[currentStepIndex]);
	});

	test("Check the CloseX icon to close the Form, if the current step index is 0", () => {
		render(
			<StepsSelectionBar
				steps={steps}
				currentStepIndex={0}
				onCloseForm={onCloseForm}
				onGoBack={onGoBack}
			/>
		);
		const closeButton = screen.getByRole("button");

		fireEvent.press(closeButton);

		expect(closeButton).not.toBeNull();
		expect(onCloseForm).toHaveBeenCalledTimes(1);
	});

	test("Check the CloseX icon to close the Form, if the current step index is greater than 0", () => {
		render(
			<StepsSelectionBar
				steps={steps}
				currentStepIndex={1}
				onCloseForm={onCloseForm}
				onGoBack={onGoBack}
			/>
		);

		const goBackButton = screen.getByRole("button");

		fireEvent.press(goBackButton);

		expect(goBackButton).not.toBeNull();
		expect(onGoBack).toHaveBeenCalledTimes(1);
	});

	test("Check selectionsByStep prop is rendered correctly", () => {
		const selectionsByStep = ["Selection 1", "Selection 2", null];
		render(<StepsSelectionBar selectionBySteps={selectionsByStep} steps={steps} />);

		const selection1 = screen.getByText(selectionsByStep[0] as string);
		const selection2 = screen.getByText(selectionsByStep[1] as string);

		expect(selection1).not.toBeNull();
		expect(selection2).not.toBeNull();

		const selection1ByLabel = screen.getByLabelText(
			`selected ${steps[0]}: ${selectionsByStep[0]}`
		);
		const selection2ByLabel = screen.getByLabelText(
			`selected ${steps[1]}: ${selectionsByStep[1]}`
		);
		const selection3ByLabel = screen.queryByLabelText(
			`selected ${steps[2]}: ${selectionsByStep[2]}`
		);

		expect(selection1ByLabel).not.toBeNull();
		expect(selection2ByLabel).not.toBeNull();
		expect(selection3ByLabel).toBeNull();
	});
});
