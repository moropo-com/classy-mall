// import { withNoBitcode } from "./plugins/withNoBitcode";
import { ConfigPlugin, withXcodeProject } from "@expo/config-plugins";

const config = {
  name: "classy-mall",
  slug: "classy-mall",
  owner: "appsapiens",
  platforms: ["ios", "android", "web"],
  version: "1.0.1",
  orientation: "portrait",
  icon: "./assets/img/square-bg.png",
  splash: {
    image: "./assets/img/launch.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    config: {
      usesNonExemptEncryption: false,
    },
    bundleIdentifier: "uk.appsapiens.classymall",
  },
  android: {
    package: "uk.appsapiens.classymall",
  },
};

const withNoBitcode = (config) => {
  return withXcodeProject(config, async (config) => {
    const xcodeProject = config.modResults;
    xcodeProject.addBuildProperty("ENABLE_BITCODE", "NO");

    return config;
  });
};

export default withNoBitcode(config);
