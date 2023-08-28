// eslint-disable-next-line no-undef
const appVariant = process.env.APP_VARIANT;

const configMapper = {
	development: {
		name: "Auto Zone (Dev)",
		scheme: "AutoZone-dev",
		bundleIndentifier: "com.autozone.dev",
		package: "com.autozone.dev",
	},
	default: {
		name: "Auto Zone",
		scheme: "autozone",
		bundleIdentifier: "com.autozone.app",
		package: "com.autozone.app",
	},
};

const config = appVariant === "development" ? configMapper.development : configMapper.default;

export default {
	name: config.name,
	slug: "autozone",
	platforms: ["ios", "android"],
	version: "1.0.0",
	orientation: "portrait",
	icon: "./assets/icon.png",
	userInterfaceStyle: "light",
	splash: {
		image: "./assets/splash.png",
		resizeMode: "contain",
		backgroundColor: "#ffffff",
	},
	updates: {
		fallbackToCacheTimeout: 0,
	},
	assetBundlePatterns: ["**/*"],
	jsEngine: "hermes",
	ios: {
		supportsTablet: true,
		bundleIdentifier: config.bundleIdentifier,
	},
	android: {
		adaptiveIcon: {
			foregroundImage: "./assets/adaptive-icon.png",
			backgroundColor: "#ffffff",
		},
	},
	extra: {
		eas: {
			projectId: "18503326-a5e7-420d-a28c-2ca8b4a0808c",
		},
	},
};
