import axios from "axios";

const azService = axios.create({
	baseURL: "https://vpic.nhtsa.dot.gov/api/",
});

export const getMakesList = async () => {
	try {
		const response = await azService.get<ApiResponse<CarItemResponse>>(
			"vehicles/GetMakesForVehicleType/car?format=json"
		);
		if (response.status === 200) {
			return response.data.Results;
		}
		throw new Error("Fetching makes list failed");
	} catch (error) {
		console.error(error);
	}
};

export const getModelsByMakeIdAndYear = async (makeID: number, year: number) => {
	try {
		const url = `vehicles/GetModelsForMakeIdYear/makeId/${makeID}/modelyear/${year}?format=json`;
		const response = await azService.get<GetModelByMakeAndYearResponse>(url);

		if (response.status === 200) {
			return response.data.Results;
		}

		throw new Error("Fetching models list failed");
	} catch (error) {
		console.error(error);
	}
};
