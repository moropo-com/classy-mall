import React from "react";
import { Dimensions, View } from "react-native";
import { Svg, G, Path, ForeignObject } from "react-native-svg";
import { shopPaths } from "../constants/shopPaths";
import { IShopRecord } from "../types";
import { SHOP_LIST } from "../constants/shopList";
import { getHighlightSvgPropsForShop } from "../helpers/hightlighting";
import ZoomableSvg from "zoomable-svg";
import { ISvgComponentProps, ISvgComponentWithZoomProps } from "../types";
// import * as bounds from "svg-path-bounding-box";
import * as bounds from "svg-boundings";

console.log(<path></path>);
console.log(bounds.path(<path d="M 10 10"></path>, false));

const { width, height } = Dimensions.get("window");
const WALL_STROKE_WIDTH = 0.26432500000000003;

// console.log(bounds.Path("M10 10"));

const SvgMapLL = ({
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
        {Object.keys(shopPaths.lowerLevel).map((shop) => {
          const occupiedShop = getShop(shop) as IShopRecord;
          // console.log(shopPaths.lowerLevel[shop]);
          // console.log(getBounds.default(shopPaths.lowerLevel[shop]));
          // let [left, top, right, bottom] = getBounds.default(
          //   "M92.648 482.945l-15.706 3.053a2 2 0 01-2.345-1.582l-4.2-21.6a2 2 0 011.582-2.345l15.706-3.053a2 2 0 012.345 1.581l4.2 21.6a2 2 0 01-1.582 2.346zm-.048-.245l-15.706 3.053a1.75 1.75 0 01-2.051-1.384l-4.2-21.6a1.749 1.749 0 011.384-2.052l15.706-3.053a1.75 1.75 0 012.051 1.384l4.2 21.6a1.75 1.75 0 01-1.384 2.055z"
          // );
          // console.log(left, top, right, bottom);
          return (
            <G key={shop}>
              <ForeignObject x={50} y={0} width={100} height={100}>
                <View></View>
              </ForeignObject>
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
                d={shopPaths.lowerLevel[shop]}
              />
            </G>
          );
        })}
      </G>
    </Svg>
  );
};

export const ZoomableMapLL = ({
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
      svgRoot={SvgMapLL}
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
