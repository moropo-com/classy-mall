import React, { useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Animated,
  ScrollView
} from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-navigation";

import SVGMapLL from "./SVGMapLL";
import SVGMapUL from "./SVGMapUL";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import theme from "./theme";
import { searchShopsTitles } from "../helpers/filtering";
import { LEVELS } from "../constants/shopList";
import { IShopSearchResult, NavToShopIdFunc } from "../types";
import PulseButton from "./PulseButton";

const { width, height } = Dimensions.get("window");

const blankShopsHighlight: IShopSearchResult = {
  [LEVELS.LL]: [],
  [LEVELS.UL]: []
};

export const SVGWebView = ({ navigation }) => {
  const [textInput, setTextInput] = React.useState("");
  const [left] = React.useState(new Animated.Value(0));
  const [position, setPosition] = React.useState("right");
  const [shouldPulse, setShouldPulse] = React.useState(false);
  const [highlightedShops, setHighlightedShops] = React.useState(
    blankShopsHighlight
  );

  const navigateToShopList = () => {
    navigation.navigate("ShopList");
  };

  const search = text => {
    setTextInput(text);
    const searchTerm = text.replace(/ /g, "").toLowerCase();
    const foundShops = searchTerm
      ? searchShopsTitles(searchTerm)
      : blankShopsHighlight;
    setHighlightedShops(foundShops);
    handleSearchResults(
      foundShops,
      position === "right" ? LEVELS.LL : LEVELS.UL
    );
  };

  const handleSearchResults = (result: IShopSearchResult, floor: string) => {
    if (floor == LEVELS.LL) {
      setShouldPulse(result[LEVELS.UL].length > 0);
    } else if (floor === LEVELS.UL) {
      setShouldPulse(result[LEVELS.LL].length > 0);
    }
  };

  const navigateToShopId: NavToShopIdFunc = shopkey => {
    navigation.navigate("ShopDetails", { shopkey });
  };

  const clearText = () => {
    setTextInput("");
    setHighlightedShops(blankShopsHighlight);
    handleSearchResults(
      blankShopsHighlight,
      position === "right" ? LEVELS.LL : LEVELS.UL
    );
  };

  const scroll = () => {
    position === "left"
      ? Animated.timing(left, {
          toValue: 0
        }).start()
      : Animated.timing(left, {
          toValue: -width
        }).start();
    setPosition(position === "left" ? "right" : "left");
  };

  useEffect(() => search(textInput), [position]); // make sure that button stops pulsating if needed, when changing level

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 5,
          marginLeft: 10,
          marginRight: 10,
          padding: 5,
          paddingLeft: 15,
          borderColor: "grey",
          borderRadius: 50,
          borderWidth: 1
        }}
      >
        <TextInput
          underlineColorAndroid="rgba(0,0,0,0)"
          value={textInput}
          style={{ fontSize: 20 }}
          onChangeText={search}
          placeholder="Search"
        />
        <MaterialIcons
          style={{
            position: "absolute",
            color: "grey",
            right: 5,
            top: 4,
            fontSize: 30
          }}
          onPress={clearText}
          name="clear"
        />
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{ flexDirection: "row", width: width, height: height - 170 }}
        >
          <Animated.View
            style={{
              height: height,
              width: width,
              position: "absolute",
              opacity: left.interpolate({
                inputRange: [-width, 0],
                outputRange: [0, 1]
              }),
              transform: [
                { perspective: 1000 },
                {
                  scale: left.interpolate({
                    inputRange: [-width, 0],
                    outputRange: [0, 1]
                  })
                }
              ],
              left: left.interpolate({
                inputRange: [-width, -width + 1, 0],
                outputRange: [1000, 0, 0]
              })
            }}
          >
            <SVGMapLL
              navigateToShopId={navigateToShopId}
              highlightedShops={highlightedShops[LEVELS.LL]}
            />
          </Animated.View>
          <Animated.View
            style={{
              height: height,
              width: width,
              position: "absolute",
              opacity: left.interpolate({
                inputRange: [-width, 0],
                outputRange: [1, 0]
              }),
              transform: [
                {
                  scale: left.interpolate({
                    inputRange: [-width, 0],
                    outputRange: [1, 2]
                  })
                }
              ],
              left: left.interpolate({
                inputRange: [-width, -1, 0],
                outputRange: [0, 0, 1000]
              })
            }}
          >
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

      <View>
        <Button
          style={[theme.groupButton, styles.footer]}
          onPress={navigateToShopList}
          color={colors.secondary}
          mode="contained"
        >
          Shop List
        </Button>
      </View>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  upButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 300,
    right: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  footer: {
    width: "100%",
    borderRadius: 0
  }
});
