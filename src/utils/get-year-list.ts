export const defaultValues = {
	initialDate: 1995,
	finalDate: 2024,
};

export default function getYearsList(
	initialDate = defaultValues.initialDate,
	finalDate = defaultValues.finalDate
) {
	const yearsList = [];

	for (let i = finalDate; i >= initialDate; i--) {
		yearsList.push(i);
	}

	return yearsList;
}
