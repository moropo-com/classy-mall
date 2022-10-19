import React, { useEffect, Fragment, useCallback } from "react";
import { View, Dimensions, SafeAreaView, LayoutRectangle } from "react-native";
import { Button, IconButton } from "react-native-paper";
import SVGMapLL from "../components/SVGMapLL";
import SVGMapUL from "../components/SVGMapUL";
import { colors } from "../constants/colors";
import { Search } from "../components/Search";
import { searchShopsTitles } from "../helpers/filtering";
import { LEVELS } from "../constants/shopList";
import { IShopSearchResult, NavToShopIdFunc } from "../types";
import PulseButton from "../components/PulseButton";
import { isIos } from "../helpers/common";
import SafeAreaViewBottomPadding from "../components/SafeAreaViewBottomPadding";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const blankShopsHighlight: IShopSearchResult = {
  [LEVELS.LL]: [],
  [LEVELS.UL]: [],
};

export const useSpringTransition = (position: "left" | "right") => {
  const value = useSharedValue(0);
  useEffect(() => {
    // eslint-disable-next-line no-nested-ternary
    value.value = position === "left" ? 0 : -width;
  }, [position, value]);
  const transition = useDerivedValue(() => {
    return withSpring(value.value, { damping: 15 });
  });
  return transition;
};

export const SVGMapView = () => {
  const [position, setPosition] = useState<"left" | "right">("left");
  const transition = useSpringTransition(position);
  const [shouldPulse, setShouldPulse] = useState(false);
  const [layout, setLayout] = useState<LayoutRectangle>();
  const [highlightedShops, setHighlightedShops] = useState(blankShopsHighlight);
  const navigation = useNavigation();

  const navigateToShopList = () => {
    navigation.navigate("ShopList", { ShopList: true });
  };

  const search = (text: string) => {
    const searchTerm = text.replace(/ /g, "").toLowerCase();
    const foundShops = searchTerm
      ? searchShopsTitles(searchTerm)
      : blankShopsHighlight;
    setHighlightedShops(foundShops);
    handleSearchResults(
      foundShops,
      position === "right" ? LEVELS.UL : LEVELS.LL //swapped UL and LL to get the correct animation
    );
  };

  const handleSearchResults = (result: IShopSearchResult, floor: string) => {
    if (floor === LEVELS.LL) {
      return setShouldPulse(result[LEVELS.UL].length > 0);
    }
    setShouldPulse(result[LEVELS.LL].length > 0);
  };

  const navigateToShopId: NavToShopIdFunc = (shopkey) => {
    navigation.navigate("ShopDetails", { shopkey, ShopDetails: true });
  };

  const scroll = () => {
    setPosition(position === "left" ? "right" : "left");
  };

  const llStyle = useAnimatedStyle(() => {
    return {
      top: 0,
      bottom: 0,
      position: "absolute",
      opacity: interpolate(
        transition.value,
        [-width, 0],
        [0, 1],
        Extrapolate.CLAMP
      ),
      transform: [
        { perspective: 1000 },
        {
          scale: interpolate(
            transition.value,
            [-width, 0],
            [0, 1],
            Extrapolate.EXTEND
          ),
        },
      ],
      left: interpolate(
        transition.value,
        [-width, -width + 1, 0],
        [1000, 0, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  const ulStyle = useAnimatedStyle(() => {
    return {
      top: 0,
      bottom: 0,
      position: "absolute",
      opacity: interpolate(
        transition.value,
        [-width, 0],
        [1, 0],
        Extrapolate.CLAMP
      ),
      transform: [
        {
          scale: interpolate(
            transition.value,
            [-width, 0],
            [1, 2],
            Extrapolate.EXTEND
          ),
        },
      ],
      left: interpolate(
        transition.value,
        [-width, -1, 0],
        [0, 0, 1000],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        <Search search={search} />
        <View
          onLayout={(e) => setLayout(e.nativeEvent.layout)}
          style={{ flex: 1 }}
        >
          <Animated.View style={llStyle}>
            <SVGMapLL
              layout={layout}
              navigateToShopId={navigateToShopId}
              highlightedShops={highlightedShops[LEVELS.LL]}
            />
          </Animated.View>
          <Animated.View style={ulStyle}>
            <SVGMapUL
              layout={layout}
              navigateToShopId={navigateToShopId}
              highlightedShops={highlightedShops[LEVELS.UL]}
            />
          </Animated.View>
          <PulseButton
            shouldPulse={shouldPulse}
            position={position}
            onPress={scroll}
          />
        </View>

        <View style={{ backgroundColor: colors.secondary }}>
          <Button onPress={navigateToShopList} color="white">
            Shop List
          </Button>
        </View>

        {isIos && <SafeAreaViewBottomPadding fillColor={colors.secondary} />}
      </SafeAreaView>
    </Fragment>
  );
};
