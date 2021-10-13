import { ConfigPlugin, withXcodeProject } from "@expo/config-plugins";

export const withNoBitcode: ConfigPlugin = (config) => {
  return withXcodeProject(config, async (config) => {
    const xcodeProject = config.modResults;
    xcodeProject.addBuildProperty("ENABLE_BITCODE", "NO");

    return config;
  });
};
