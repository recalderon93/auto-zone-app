import { scale } from "../../styles";
import Svg, { Path, SvgProps } from "react-native-svg";

type Props = {
	size?: number;
} & SvgProps;

const defaultProps = {
	size: 21,
	stroke: "#F37F00",
};

/**
 * # CloseIcon
 *
 * @component
 * @description This component is used to render a close icon.
 * @category Components - Icons
 * @version 1.0.0
 */
const CloseIcon = ({ size = defaultProps.size, stroke = defaultProps.stroke, ...props }: Props) => {
	const scaledWidth = scale(size, "xy");

	return (
		<Svg width={scaledWidth} height={scaledWidth} viewBox="0 0 21 21" fill="none" {...props}>
			<Path
				d="M10.205 19.41a9.205 9.205 0 100-18.41 9.205 9.205 0 000 18.41zM12.966 13.887L7.444 6.523M7.444 13.887l5.522-7.364"
				stroke={stroke}
				strokeWidth={(2 / 21) * scaledWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

export default CloseIcon;
