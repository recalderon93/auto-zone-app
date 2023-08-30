/* eslint-disable @typescript-eslint/ban-ts-comment */
import { scale } from "@src/styles";
import { useMemo } from "react";
import Svg, { G, Path, Mask, Defs, ClipPath, SvgProps } from "react-native-svg";

type Props = {
	size?: number;
	isChecked?: boolean;
} & SvgProps;

const defaultProps = {
	isChecked: false,
	size: 30,
};

/**
 * # 🚗 Car Icon
 *
 * @component
 * @description Icon of a car, that renders a checked is the prop isChecked is true.
 * @category Icons
 */
const CarIcon = ({
	size = defaultProps.size,
	isChecked = defaultProps.isChecked,
	...props
}: Props) => {
	const scaledSize = useMemo(() => scale(size, "xy"), [size]);
	const checkTestId = "check-mark";

	return (
		<Svg width={scaledSize} height={scaledSize} viewBox="0 0 30 30" fill="none" {...props}>
			<G clipPath="url(#clip0_22_151)">
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.566 10.5a.53.53 0 01.324.11l.052.04a.533.533 0 01.1.1l2.07 2.634c.105.133.26.21.425.21h2.295c.446 0 .668.25.668.75s-.422.95-1.267 1.354l-.206.096.922 1.27c.074.101.113.225.113.352v8.6a.488.488 0 01-.126.351.438.438 0 01-.334.133H18.92a.465.465 0 01-.46-.483v-.848c0-.32-.248-.58-.552-.58H7.091c-.304 0-.55.26-.55.58v.848a.465.465 0 01-.46.483H2.396a.438.438 0 01-.334-.133.487.487 0 01-.126-.35v-8.6c0-.128.04-.252.113-.352l.922-1.27-.206-.097c-.845-.403-1.266-.854-1.266-1.354 0-.5.221-.75.667-.75h2.296a.54.54 0 00.424-.21l2.07-2.634a.582.582 0 01.1-.1l.052-.04a.532.532 0 01.324-.11h10.133zm3.554 8.783c.008-.685-.257-.947-.794-.786l-3.231.508a.509.509 0 00-.328.185c-.125.164-.22.412-.285.745-.092.476-.016.706.23.69l3.14-.048a.57.57 0 00.12-.015c.758-.185 1.14-.611 1.148-1.279zm-16.446-.786c-.538-.16-.803.1-.795.786.008.668.39 1.094 1.149 1.28.039.009.08.013.12.014l3.14.047c.244.017.321-.213.23-.689-.065-.333-.16-.581-.285-.745a.51.51 0 00-.329-.185l-3.23-.508zm12.105-5.926H8.22a.502.502 0 00-.399.199l-1.803 2.31c-.276.354-.036.885.399.885h12.166c.435 0 .674-.53.399-.885l-1.803-2.31a.5.5 0 00-.4-.199z"
					fill="#484848"
				/>
				{isChecked ? (
					<G testID={checkTestId}>
						<Path d="M21.5 17.5a7 7 0 100-14 7 7 0 000 14z" fill="#1F7400" />
						<Path
							d="M20.357 13.5L17.5 10.62l.806-.811 2.051 2.061 4.337-4.37.806.818-5.143 5.182z"
							fill="#417505"
						/>
						<Mask
							id="a"
							// @ts-ignore
							style={{
								maskType: "luminance",
							}}
							maskUnits="userSpaceOnUse"
							x={17}
							y={7}
							width={9}
							height={7}
						>
							<Path
								d="M20.357 13.5L17.5 10.62l.806-.811 2.051 2.061 4.337-4.37.806.818-5.143 5.182z"
								fill="#fff"
							/>
						</Mask>
						<G mask="url(#a)">
							<Path d="M29.5 2.5h-16v16h16v-16z" fill="#fff" />
						</G>
					</G>
				) : null}
			</G>
			<Defs>
				<ClipPath id="clip0_22_151">
					<Path fill="#fff" transform="translate(1.5 3.5)" d="M0 0H27V23H0z" />
				</ClipPath>
			</Defs>
		</Svg>
	);
};

export default CarIcon;
