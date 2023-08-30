import getYearsList, { defaultValues } from "@src/utils/get-year-list";

describe("getYearsList", () => {
	const initialYear = 2000;
	const endYear = 2002;
	const defaultInitialYear = defaultValues.initialDate;
	const defaultEndYear = defaultValues.finalDate;

	test("should return an array of years", () => {
		const years = getYearsList(initialYear, endYear);
		expect(years).toHaveLength(endYear - initialYear + 1);

		const years2 = getYearsList(initialYear);
		expect(years2).toHaveLength(defaultEndYear - initialYear + 1);
	});

	test("Check default Values", () => {
		const years = getYearsList();
		expect(years).toHaveLength(defaultEndYear - defaultInitialYear + 1);
	});
});
