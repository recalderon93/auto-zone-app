import { Colors, scale } from "../../styles";
import { StyleSheet, FlatList } from "react-native";
import SelectionListItem from "../selection-list-item/selection-list-item";

type Props = {
	data: MakeListItem[];
	onSelectMakeId: (id: number) => void;
	isCurrent?: boolean;
	onGoBack?: () => void;
};

/**
 * # MakesList
 *
 * @component
 * @description List of Makes retrieved from the API.
 * @category Component - Lists
 * @version 1.0.0
 */
const MakesList = ({ data, onSelectMakeId, isCurrent, onGoBack }: Props) => {
	if (isCurrent && data.length === 0) {
		onGoBack && onGoBack();
	}

	return (
		<FlatList<MakeListItem>
			initialNumToRender={17}
			showsVerticalScrollIndicator={false}
			style={styles.container}
			contentContainerStyle={{ paddingBottom: scale(124, "y") }}
			data={data}
			renderItem={({ item }) => (
				<SelectionListItem caption={item.name} onPress={() => onSelectMakeId(item.id)} />
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

export default MakesList;
