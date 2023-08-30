import { Colors, scale } from "@src/styles";
import { StyleSheet, FlatList } from "react-native";
import SelectionListItem from "../selection-list-item/selection-list-item";

type Props = {
	isCurrentList: boolean;
	data: number[];
	onSelectYear: (year: number) => void;
};

/**
 * # YearList
 *
 * @component
 * @description List of available years to select from.
 * @category Component - Lists
 * @version 1.0.0
 */
const YearList = ({ data, onSelectYear }: Props) => {
	return (
		<FlatList<number>
			initialNumToRender={17}
			showsVerticalScrollIndicator={false}
			style={styles.container}
			contentContainerStyle={{ paddingBottom: scale(124, "y") }}
			data={data}
			renderItem={({ item }) => (
				<SelectionListItem caption={item.toString()} onPress={() => onSelectYear(item)} />
			)}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		width: scale(390, "x"),
		height: "100%",
		backgroundColor: Colors.off_white,
	},
});

export default YearList;
