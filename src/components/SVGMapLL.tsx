import React from "react";
import Svg, { G, Path, Text, TSpan } from "react-native-svg";
import { getHighlightSvgPropsForShop } from "../helpers/hightlighting";
import { SHOP_LIST } from "../constants/shopList";
import { ISvgComponentProps } from "../types";
import { shopPaths } from "../constants/shopPaths";
import { IShopRecord } from "../types";

// TODO Fix issue with TS complaining on typing of Text component from
// react-native-svg

// 2do Export each shop in an individual parametrized component

const getShop = (shopCode) => {
  const shops = Object.keys(SHOP_LIST);
  let foundShop = {};
  shops.map((shop) => {
    if (SHOP_LIST[shop].shopCodes.includes(shopCode)) {
      foundShop = SHOP_LIST[shop];
    }
  });
  return foundShop;
};

const WALL_STROKE_WIDTH = 0.26432500000000003;

const SVGMapLL = ({
  navigateToShopId,
  highlightedShops,
}: ISvgComponentProps) => {
  // console.log(navigateToShopId, highlightedShops);
  return (
    <Svg width={400} height={600} viewBox="0 0 352.217 628.529">
      <G fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={0.5}>
        {Object.keys(shopPaths).map((shop) => {
          const occupiedShop = getShop(shop) as IShopRecord;
          return (
            <G key={shop}>
              <Path
                fill={
                  occupiedShop &&
                  getHighlightSvgPropsForShop(
                    occupiedShop.key,
                    highlightedShops
                  ).fill
                }
                stroke={
                  occupiedShop &&
                  getHighlightSvgPropsForShop(
                    occupiedShop.key,
                    highlightedShops
                  ).stroke
                }
                strokeWidth={
                  occupiedShop &&
                  WALL_STROKE_WIDTH *
                    getHighlightSvgPropsForShop(
                      occupiedShop.key,
                      highlightedShops
                    ).strokeWidthScale
                }
                d={shopPaths[shop]}
              />
              <Text fontFamily="'Times New Roman'">
                M329.268 607.379
                <TSpan x={295} y={580}>
                  Tattoo Parlour
                </TSpan>
              </Text>
            </G>
          );
        })}
      </G>
    </Svg>
  );
};

export default SVGMapLL;
