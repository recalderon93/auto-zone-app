import { HomeNavigationProps } from "../navigation/routes";
import ScreenTemplate from "../components/screen-template/screen-template";
import SelectedCarList from "../components/lists/selected-car-list";
import useStore from "../store/store";

type Props = {
	navigation: HomeNavigationProps;
};

/**
 * # MainScreen
 *
 * @description Screen that render the list of selected vehicles.
 * If there no selected vehicles it will render a CTA button to add a new vehicle.
 * @category Navigation - Screens
 * @version 1.0.0
 */
const MainScreen = ({ navigation }: Props) => {
	const goToSelectionForm = () => navigation.navigate("SelectionForm");
	const selectedCars = useStore(st => st.selectedCars);

	return (
		<ScreenTemplate>
			<SelectedCarList data={selectedCars} onAddVehicle={goToSelectionForm} />
		</ScreenTemplate>
	);
};

export default MainScreen;
