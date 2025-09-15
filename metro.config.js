const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add inlineRem for react-native-reusables
config.inlineRem = 16;

module.exports = withNativeWind(config, { input: "./global.css" });
