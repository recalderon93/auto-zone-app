import { scale } from "../../styles";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

type Props = {
	size?: number;
} & SvgProps;

const defaultValues = {
	size: 18,
	stroke: "#000",
};

/**
 * # RightChevronIcon
 * 
 * @component
 * @description Icon for Right Chevron
 * @category Components Icons
 */
const RightChevronIcon = ({
	size = defaultValues.size,
	stroke = defaultValues.stroke,
	...props
}: Props) => {
	const scaledSize = scale(size, "x");

	return (
		<Svg width={scaledSize} height={scaledSize} viewBox="0 0 18 18" fill="none">
			<Path
				d="M6.75 13.5l4.5-4.5-4.5-4.5"
				stroke={stroke}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

export default RightChevronIcon;
