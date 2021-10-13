import { withNoBitcode } from "plugins/withNoBitcode";

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

export default withNoBitcode(config);
