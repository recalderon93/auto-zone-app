import getMakesNameList from "@src/utils/get-makes-name-list";

const data = [
	{
		MakeId: 485,
		MakeName: "VOLVO",
		VehicleTypeId: 2,
		VehicleTypeName: "Passenger Car",
	},
	{
		MakeId: 492,
		MakeName: "FIAT",
		VehicleTypeId: 2,
		VehicleTypeName: "Passenger Car",
	},
	{
		MakeId: 493,
		MakeName: "ALFA ROMEO",
		VehicleTypeId: 2,
		VehicleTypeName: "Passenger Car",
	},
];

describe("@utils/getMakesNameList", () => {
	test("should return an array of makes without repetition", () => {
		const makes = getMakesNameList(data);

		expect(makes).toHaveLength(3);
	});
});
