import { create } from "zustand";
import { getMakesList, getModelsByMakeIdAndYear } from "@src/services/services";
import getMakesNameList from "@src/utils/get-makes-name-list";
import getYearsList from "@src/utils/get-year-list";

type State = {
	selectedYear: number | null;
	selectedMakeId: number | null;
	steps: string[];
	yearsList: number[];
	makeList: { id: number; name: string }[];
	modelList: ModelByMakeAndYear[];
	currentStepIndex: number;
	selectedCars: Array<{ year: number } & ModelByMakeAndYear>;
	loader: boolean;
};

type Actions = {
	onSelectYear: (year: number) => Promise<void>;
	onSelectMakeId: (makeId: number) => Promise<void>;
	onSelectModel: (model: ModelByMakeAndYear) => void;
	onGoBackFromStep: () => void;
	resetSelection: () => void;
};

const initialState: State = {
	loader: false,
	selectedYear: null,
	selectedMakeId: null,
	steps: ["Year", "Make", "Model"],
	currentStepIndex: 2,
	selectedCars: [],
	yearsList: getYearsList(),
	makeList: [],
	modelList: [],
};

const useStore = create<State & Actions>((set, get) => ({
	...initialState,
	onSelectYear: async selectedYear => {
		set({ loader: true });
		const makeList = await getMakesList();

		if (makeList === undefined) {
			alert("Something went wrong, please try again later");
			set({ loader: false });
			return;
		}
		set({
			selectedYear,
			currentStepIndex: 1,
			makeList: getMakesNameList(makeList),
			loader: false,
		});
	},
	onSelectMakeId: async selectedMakeId => {
		const { selectedYear } = get();
		set({ loader: true });
		const modelList = await getModelsByMakeIdAndYear(selectedMakeId, selectedYear as number);
		set({ loader: false });
		if (modelList === undefined) {
			alert("Something went wrong loading Models, please try again later");
			return;
		}
		if (modelList.length === 0) {
			alert("No models found for this year and make");
			return;
		}

		set({ selectedMakeId, currentStepIndex: 2, modelList, loader: false });
	},
	onSelectModel: model => {
		const { selectedYear, selectedCars } = get();
		const newItem = { year: selectedYear as number, ...model };
		const newList = selectedCars.filter(item => item.Model_ID !== model.Model_ID);
		newList.unshift(newItem);

		if (selectedCars.length > 3) {
			newList.pop();
		}
		set({ selectedCars: newList });
		get().resetSelection();
	},
	onGoBackFromStep: () => {
		const stepIndex = get().currentStepIndex;

		if (stepIndex === 1) {
			set({ selectedYear: null, currentStepIndex: 0, makeList: [] });
		} else if (stepIndex === 2) {
			set({ selectedMakeId: null, currentStepIndex: 1, modelList: [] });
		}
	},
	resetSelection: () => set({ selectedYear: null, selectedMakeId: null, currentStepIndex: 0 }),
}));

export default useStore;
