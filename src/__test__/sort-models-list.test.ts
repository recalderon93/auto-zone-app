import sortModelsList from "@src/utils/sort-models-list";

const data = [
	{
		Make_ID: 474,
		Make_Name: "HONDA",
		Model_ID: 1861,
		Model_Name: "Accord",
	},
	{
		Make_ID: 474,
		Make_Name: "HONDA",
		Model_ID: 1863,
		Model_Name: "Civic",
	},
	{
		Make_ID: 474,
		Make_Name: "HONDA",
		Model_ID: 1864,
		Model_Name: "Pilot",
	},
	{
		Make_ID: 474,
		Make_Name: "HONDA",
		Model_ID: 1865,
		Model_Name: "CR-V",
	},
];

describe("@utils/sortModelsList", () => {
	test("should return an array of models sorted by name", () => {
		const makes = sortModelsList(data);

		expect(makes).toHaveLength(4);
		expect(makes[0].Model_Name).toBe("Accord");
		expect(makes[1].Model_Name).toBe("CR-V");
		expect(makes[2].Model_Name).toBe("Civic");
		expect(makes[3].Model_Name).toBe("Pilot");
	});
});
