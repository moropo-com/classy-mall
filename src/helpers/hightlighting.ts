import { colors } from "../constants/colors";

const notHighlightedColors = {
  fill: "transparent",
  stroke: "#000",
  strokeWidth: 1,
};

const highLightedColors = {
  fill: colors.green,
  stroke: "blue",
  strokeWidth: 5,
};

export const getHighlightSvgPropsForShop = (
  shopKey: string,
  highlightedShops: string[] = []
) =>
  highlightedShops.includes(shopKey) ? highLightedColors : notHighlightedColors;
