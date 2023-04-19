import React, { useEffect, Fragment } from "react";
import {
  TextInput,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-paper";
import SVGMapLL from "../components/SVGMapUL";
import SVGMapUL from "../components/SVGMapLL";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
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

const { width, height } = Dimensions.get("window");

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

export const SVGMapView = ({ navigation }) => {
  const [textInput, setTextInput] = useState("");
  const [position, setPosition] = useState<"left" | "right">("right");
  const transition = useSpringTransition(position);
  const [shouldPulse, setShouldPulse] = useState(false);
  const [highlightedShops, setHighlightedShops] = useState(blankShopsHighlight);

  const navigateToShopList = () => {
    navigation.navigate("ShopList", { ShopList: true });
  };

  const search = (text) => {
    setTextInput(text);
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
      setShouldPulse(result[LEVELS.UL].length > 0);
    } else if (floor === LEVELS.UL) {
      setShouldPulse(result[LEVELS.LL].length > 0);
    }
  };

  const navigateToShopId: NavToShopIdFunc = (shopkey) => {
    navigation.navigate("ShopDetails", { shopkey, ShopDetails: true });
  };

  const clearText = () => {
    setTextInput("");
    setHighlightedShops(blankShopsHighlight);
    handleSearchResults(
      blankShopsHighlight,
      position === "right" ? LEVELS.UL : LEVELS.LL //swapped UL and LL to get the correct animation
    );
  };

  const scroll = () => {
    setPosition(position === "left" ? "right" : "left");
  };

  const makeStatusBarTextBlack = (animated = true) => {
    StatusBar.setBarStyle("dark-content", animated);
  };

  const llStyle = useAnimatedStyle(() => {
    // const rotate = (index - 1) * mix(transition.value, 0, Math.PI / 6);
    return {
      height,
      width,
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
    // const rotate = (index - 1) * mix(transition.value, 0, Math.PI / 6);
    return {
      height,
      width,
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
  useEffect(() => {
    search(textInput);
    makeStatusBarTextBlack();
  }, [position]); // make sure that button stops pulsating if needed, when changing level

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.clearButton}>
          <TextInput
            underlineColorAndroid="rgba(0,0,0,0)"
            value={textInput}
            style={styles.searchInput}
            onChangeText={search}
            placeholder="Search"
          />
          <MaterialIcons
            style={styles.clearIcon}
            onPress={clearText}
            name="clear"
          />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.mapContainer}>
            <Animated.View style={llStyle}>
              <SVGMapLL
                navigateToShopId={navigateToShopId}
                highlightedShops={highlightedShops[LEVELS.LL]}
              />
            </Animated.View>
            <Animated.View style={ulStyle}>
              <SVGMapUL
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
        </ScrollView>

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

const styles = StyleSheet.create({
  clearButton: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    paddingLeft: 15,
    borderColor: "grey",
    borderRadius: 50,
    borderWidth: 1,
  },
  clearIcon: {
    position: "absolute",
    color: "grey",
    right: 5,
    top: 3,
    fontSize: 30,
  },
  mapContainer: {
    flexDirection: "row",
    width,
    height: height - 170,
  },
  searchInput: {
    fontSize: 20,
  },
});
