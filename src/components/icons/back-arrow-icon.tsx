import { scale } from "@src/styles";
import Svg, { Path, SvgProps } from "react-native-svg";

type Props = { size?: number } & SvgProps;

const defaultProps = {
	size: 21,
	stroke: "#F37F00",
};

/**
 * # BackArrowIcon
 * 
 * @component
 * @description This component is used to render a back arrow icon.
 * @category Components - Icons
 * @version 1.0.0
 */
const BackArrowIcon = ({
	size = defaultProps.size,
	stroke = defaultProps.stroke,
	...props
}: Props) => {
	const scaledSize = scale(size, "xy");

	return (
		<Svg width={scaledSize} height={scaledSize} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				d="M12 8l-4 4m0 0l4 4m-4-4h8m6 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
				stroke={stroke}
				strokeWidth={(2 / 21) * scaledSize}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

export default BackArrowIcon;
