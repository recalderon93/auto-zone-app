/* eslint-disable @typescript-eslint/ban-ts-comment */
import { scale } from "@src/styles";
import Svg, { Path, Mask, G, SvgProps } from "react-native-svg";

type Props = {
	size?: number;
} & SvgProps;

export const defaultProps = {
	size: 265,
};

const AutoZoneLogo = ({ size = defaultProps.size, ...props }: Props) => {
	const ratio = 32 / 265;
	const scaledWidth = scale(size, "x");
	const scaledHeight = scaledWidth * ratio;

	return (
		<Svg width={scaledWidth} height={scaledHeight} viewBox="0 0 265 32" fill="none" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M256.593 5.967c-4.165-.224-8.073 1.709-11.12 5.255-.072-.245-1.43-5.45-7.767-4.197h-9.287l-3.89 6.857c.264-2.837-1.008-7.915-7.505-7.915-1.946 0-3.31.264-5.11 1.033l3.902-6.897h-25.328l-5.475 9.673h8.508l-12.309 9.098c.117-.298.232-.599.341-.905 2.498-6.942-.384-11.908-6.343-12.07-2.61-.07-4.907.572-7.208 1.96l.476-.845h-3.975l1.734-3.063h-11.524l-1.708 3.018h-17.478C135.702 2.75 131.647 0 125.631 0c-2.214 0-7.062.443-10.467 3.947L117.335.11H0v30.413h122.977l1.99-3.506c.204.502 1.812 4.2 8.675 4.2 2.254 0 7.702-.525 10.683-5.206.225.743 1.61 4.52 5.641 4.52h5.63l3.088-5.455c.388 4.243 3.57 5.927 6.966 6.116 3.275.183 6.196-.768 8.696-2.62l-1.118 1.96h25.374l2.39-4.214c.63 2.168 1.86 4.632 6.666 4.987 2.883.212 5.976-.673 8.246-2.222l-.822 1.449 21.249.005 3.731-6.61c-.392 3.456 1.639 7.092 6.756 7.384 7.28.415 11.937-5.111 13.966-9.449 6.41-13.703-1.014-15.723-4.191-15.895z"
				fill="#fff"
			/>
			<Mask
				id="a"
				// @ts-ignore
				style={{
					maskType: "luminance",
				}}
				maskUnits="userSpaceOnUse"
				x={260}
				y={1}
				width={5}
				height={6}
			>
				<Path d="M260.104 1.784h4.655v4.607h-4.655V1.784z" fill="#D52B1E" />
			</Mask>
			<G mask="url(#a)">
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M261.944 3.923v-.82h.55c.284 0 .58.055.58.388 0 .407-.308.432-.65.432h-.48zm0 .334h.464l.703 1.159h.448l-.757-1.179c.39-.036.69-.25.69-.72 0-.532-.307-.759-.935-.759h-1.001v2.658h.389v-1.16l-.001.001zm-1.372-.18c0-1.092.806-1.912 1.87-1.912 1.024 0 1.85.82 1.85 1.913 0 1.11-.826 1.925-1.85 1.925-1.064 0-1.87-.815-1.87-1.925v-.001zm1.87 2.314c1.246 0 2.318-.975 2.318-2.313 0-1.32-1.072-2.294-2.318-2.294-1.273 0-2.338.974-2.338 2.294 0 1.338 1.065 2.313 2.338 2.313z"
					fill="#D52B1E"
				/>
			</G>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M93.931 1.694l-15.43 27.101h5.168L99.114 1.694h-5.183zm10.998 0h-3.201L86.3 28.795h3.197l5.56-9.742 9.872-17.36v.001zm8.943 0L98.446 28.795h.912l15.42-27.101h-.906zm-5.577 0l-15.42 27.101h1.883l15.425-27.101h-1.888zm-106.607 0v27.101H40.78L56.2 1.694H1.688zm82.232 0L68.493 28.795h8.122L92.048 1.694H83.92zm-26.655 0L41.826 28.795h13.057L70.309 1.694H57.265zm14.333 0L56.172 28.795H66.92L82.354 1.694H71.598z"
				fill="#F37F00"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M145.448 8.47l-7.492 13.083c-.612 1.082-1.246 1.389-2.217 1.202-1.214-.234-.707-1.146-.356-1.77l7.383-12.516h-7.342s-8.347 14.266-8.343 14.273c-1.488 2.68.466 5.363 5.3 5.956 2.748.337 8.512.014 11.228-4.55l.014-.013 9.132-15.666h-7.307v.001zm13.46 6.163h4.032l3.318-5.704h-4.02l1.752-3h-7.922l-9.492 16.27c-.866 1.559-.784 3.304.477 4.88.9 1.144 1.846 1.716 3.549 1.716h4.493l3.114-5.336h-3.391c-.26 0-.556.042-.665-.2-.058-.15-.09-.306-.022-.445l4.777-8.181zM123.92 10.85l-3.137 5.562h-3.82l3.438-6.095c.453-.808 1.33-1.522 2.708-1.388 1.153.111 1.527.712.812 1.922m3.063-9.044c-3.163-.402-9.884 0-12.832 5.7l-12.034 21.288h7.844l3.357-5.943h3.814l-3.36 5.943h7.784l11.087-19.554c1.845-3.447.07-6.706-5.66-7.434zM172.56 17.83c-1.754 3.487-2.952 5.224-4.43 4.926-1.076-.217-.674-1.79.386-3.896 1.48-2.94 3.067-5.082 4.39-4.845 1.238.22.714 1.71-.345 3.815m2.66-10.192c-5.902-.325-11.446 4.49-13.99 11.907-1.822 5.31-1.052 9.771 4.533 10.079 5.643.31 11.044-3.316 14.061-12.111 1.821-5.31.52-9.594-4.603-9.875m65.675 1.03c-3.505-.865-5.81 1.369-5.81 1.369l.768-1.373h-6.658L217.74 28.79h7.315l6.886-12.12c.48-.857 1.138-1.843 2.12-1.632.876.19 1.136 1.002.848 1.548l-6.93 12.21h7.261l8.313-14.674c1.147-2.13-.74-4.98-2.655-5.453m-31.626.495l4.247-7.47h-21.688l-3.65 6.415h10.671l-18.338 13.484-4.129 7.202h21.725l3.633-6.374h-10.198l17.727-13.257zm44.103 8.266h-3.414c1.226-2.172 2.482-3.612 3.558-3.416 1.137.208.76 1.523-.144 3.416zm3.007-9.792c-6.069-.325-11.4 4.49-14.017 11.909-1.873 5.31-1.45 9.77 4.292 10.077 4.833.258 9.124-2.22 12.339-8.137h-7.406c-1.01 1.553-1.966 2.51-2.886 2.329-.855-.168-.568-1.783.11-3.48h10.768c.418-.876.807-1.814 1.164-2.824 1.872-5.31.901-9.593-4.364-9.874z"
				fill="#D52B1E"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M214.758 17.83c-1.755 3.487-2.953 5.224-4.43 4.926-1.077-.217-.674-1.79.385-3.896 1.48-2.94 3.068-5.082 4.39-4.846 1.238.222.715 1.711-.345 3.816zm2.662-10.192c-5.903-.325-11.447 4.49-13.991 11.909-1.822 5.309-1.053 9.77 4.531 10.077 5.643.31 11.044-3.317 14.062-12.112 1.822-5.31.52-9.593-4.602-9.874z"
				fill="#D52B1E"
			/>
		</Svg>
	);
};

export default AutoZoneLogo;
