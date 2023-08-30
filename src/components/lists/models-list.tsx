import { Colors, scale } from "@src/styles";
import { StyleSheet, FlatList } from "react-native";
import SelectionListItem from "../selection-list-item/selection-list-item";

type Props = {
	data: ModelByMakeAndYear[];
	isCurrent?: boolean;
	onSelectModel?: (model: ModelByMakeAndYear) => void;
	onGoBack?: () => void;
};

/**
 * # ModelsList
 *
 * @component
 * @description List of Car Models retrieved from the API.
 * @category Component - Lists
 * @version 1.0.0
 */
const ModelsList = ({ data, isCurrent, onSelectModel, onGoBack }: Props) => {
	if (isCurrent && data.length === 0) onGoBack && onGoBack();

	return (
		<FlatList<ModelByMakeAndYear>
			initialNumToRender={17}
			showsVerticalScrollIndicator={false}
			style={styles.container}
			contentContainerStyle={{ paddingBottom: scale(124, "y") }}
			data={data}
			renderItem={({ item }) => (
				<SelectionListItem
					caption={item.Model_Name}
					onPress={() => {
						onSelectModel?.(item);
					}}
				/>
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

export default ModelsList;
