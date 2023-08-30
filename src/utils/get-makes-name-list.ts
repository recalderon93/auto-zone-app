export default function getMakesNameList(rawMakesList: CarItemResponse[]) {
	const rawNamesList = rawMakesList.map(make => ({
		name: make.MakeName,
		id: make.MakeId,
	}));

	return rawNamesList;
}
