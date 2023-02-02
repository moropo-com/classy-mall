import React from "react";
import { getHighlightSvgPropsForShop } from "../helpers/hightlighting";
import { LEVELS, SHOP_LIST } from "../constants/shopList";
import { ISvgComponentProps } from "../types";
import { TouchableOpacity, View, Text } from "react-native";

const WALL_STROKE_WIDTH = 0.26432500000000003;

export const Shop = ({ navigateToShopId, highlightedShops, shop }) => (
  <TouchableOpacity
    onPress={() => navigateToShopId(shop.key)}
    testID={shop.key}
  >
    <View
      style={{
        backgroundColor: getHighlightSvgPropsForShop(shop.key, highlightedShops)
          .fill,
        borderColor: getHighlightSvgPropsForShop(shop.key, highlightedShops)
          .stroke,
        borderWidth: getHighlightSvgPropsForShop(shop.key, highlightedShops)
          .strokeWidthScale,
        position: "absolute",
        zIndex: -1,
        width: shop.width,
        height: shop.height,
        top: shop.top,
        left: shop.left,
      }}
    >
      <Text>{shop.title}</Text>
    </View>
  </TouchableOpacity>
);

const SvgComponent = ({
  navigateToShopId,
  highlightedShops,
}: ISvgComponentProps) => (
  <View style={{ flex: 1 }}>
    {Object.values(SHOP_LIST)
      .filter(({ atLevels }) => atLevels.includes(LEVELS.LL))
      .map((shop) => (
        <Shop
          key={shop.key}
          navigateToShopId={navigateToShopId}
          highlightedShops={highlightedShops}
          shop={shop}
        />
      ))}
  </View>
);

export default SvgComponent;
