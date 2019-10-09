import { colors } from '../constants/colors';

const notHighlightedColors = {
  fill: "transparent",
  stroke: "#000",
  strokeWidth: 0.26432500000000003
};

const highLightedColors = {
  fill: colors.green,
  stroke: colors.darkGreen,
  strokeWidth: 0.26432500000000003 * 5
};

export const getHightLightColorForShop = (shopKey: string, highlightedShops: string[] = []) =>
  highlightedShops.includes(shopKey) ? highLightedColors : notHighlightedColors;

// TODO Allow overriding of storke-width;