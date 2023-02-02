import { colors } from "../constants/colors";

const notHighlightedColors = {
  fill: "transparent",
  stroke: "#000",
  strokeWidthScale: 1,
};

const highLightedColors = {
  fill: colors.green,
  stroke: colors.darkGreen,
  strokeWidthScale: 2,
};

export const getHighlightSvgPropsForShop = (
  shopKey: string,
  highlightedShops: string[] = []
) =>
  highlightedShops.includes(shopKey) ? highLightedColors : notHighlightedColors;
