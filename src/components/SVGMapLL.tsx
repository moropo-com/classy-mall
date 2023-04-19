import React from "react";
import { LEVELS, SHOP_LIST } from "../constants/shopList";
import { ISvgComponentProps } from "../types";
import { View } from "react-native";
import { Shop } from "./SVGMapUL";

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
