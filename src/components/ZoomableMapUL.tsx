import React from "react";
import { Dimensions } from "react-native";
import { Svg, G, Path } from "react-native-svg";
import { shopPaths } from "../constants/shopPaths";
import { IShopRecord } from "../types";
import { SHOP_LIST } from "../constants/shopList";
import { getHighlightSvgPropsForShop } from "../helpers/hightlighting";
import ZoomableSvg from "zoomable-svg";
import { ISvgComponentProps, ISvgComponentWithZoomProps } from "../types";

const { width, height } = Dimensions.get("window");
const WALL_STROKE_WIDTH = 0.26432500000000003;

const SvgMapUL = ({
  transform,
  navigateToShopId,
  highlightedShops,
}: ISvgComponentWithZoomProps) => {
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
  return (
    <Svg width={width} height={height} viewBox={`220 600 ${width} ${height}`}>
      <G
        transform={transform}
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={0.5}
      >
        {Object.keys(shopPaths.upperLevel).map((shop) => {
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
                d={shopPaths.upperLevel[shop]}
              />
            </G>
          );
        })}
      </G>
    </Svg>
  );
};

export const ZoomableMapUL = ({
  highlightedShops,
  navigateToShopId,
}: ISvgComponentProps) => {
  return (
    <ZoomableSvg
      align="mid"
      vbWidth={0}
      vbHeight={0}
      width={width}
      height={height}
      initialTop={500}
      initialLeft={250}
      initialZoom={0}
      doubleTapThreshold={0}
      meetOrSlice="meet"
      svgRoot={SvgMapUL}
      childProps={{ highlightedShops, navigateToShopId }}
      constrain={{
        combine: "dynamic",
        scaleExtent: [width / height, 2],
        translateExtent: [
          [0, 0],
          [100, 100],
        ],
      }}
    />
  );
};
