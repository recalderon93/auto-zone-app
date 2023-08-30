export default function sortModelsList(data: ModelByMakeAndYear[]) {
	return data.sort((a, b) => {
		if (a.Model_Name < b.Model_Name) {
			return -1;
		}
		if (a.Model_Name > b.Model_Name) {
			return 1;
		}
		return 0;
	});
}
