import { colors } from '../components/theme';

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

export const getHightLightColorForShop = (shopKey, highlightedShops = []) =>
  highlightedShops.includes(shopKey) ? highLightedColors : notHighlightedColors;

// 2do: Allow overriding of storke-width;