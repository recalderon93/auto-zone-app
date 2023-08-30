/** Type of the Make List item */
type MakeListItem = {
	/** Make ID */
	id: number;
	/** Make name */
	name: string;
}

/** API Car Item Response */
type CarItemResponse = {
	MakeId: number;
	MakeName: string;
	VehicleTypeId: number;
	VehicleTypeName: string;
};

/** API Model By Make and Year response */
type ModelByMakeAndYear = {
	Make_ID: number;
	Make_Name: string;
	Model_ID: number;
	Model_Name: string;
};

/** API Get Model By Make and Year Response */
type GetModelByMakeAndYearResponse = {
	Count: number;
	Message: string;
	SearchCriteria: string;
	Results: ModelByMakeAndYear[];
};

/** Base API Response */
type ApiResponse<T> = {
	Count: number;
	Message: string;
	SearchCriteria: string | null;
	Results: T[];
};
