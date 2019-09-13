import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Animated,
  Easing
} from "react-native";

import { Button } from "react-native-paper";
import SVGMapLL from "./SVGMapLL";
import SVGMapUL from "./SVGMapUL";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "./theme";
import theme from "./theme";
var BGWASH = "rgba(255,255,255,0.8)";

const { width, height } = Dimensions.get("window");

export const SVGWebView = ({ navigation }) => {
  let textInput = React.useRef();
  const [left, setLeft] = React.useState(new Animated.Value(0));
  const [position, setPosition] = React.useState("right");
  const [shouldPulseLeft, setShouldPulseLeft] = React.useState(false);
  const [shouldPulse, setShouldPulse] = React.useState(false);
  const [pulse] = React.useState(new Animated.Value(1));

  const navigateToShopList = () => {
    navigation.navigate("ShopList");
  };

  const search = text => {
    text.replace(/ /g, "").toLowerCase();
  };

  const handleSearchResults = (result, floor) => {
    if (floor == "UL" && result[0] != "" && !shouldPulse) {
      setShouldPulse(true);
      pulseAnimation();
    } else if (floor == "UL" && result[0] == "" && shouldPulse) {
      setShouldPulse(false);
    }

    if (floor == "LL" && result[0] != "" && !shouldPulseLeft) {
      setShouldPulseLeft(true);
      pulseAnimation();
    } else if (floor == "LL" && result[0] == "" && shouldPulseLeft) {
      setShouldPulseLeft(false);
    }
  };

  const pulseAnimation = () => {
    Animated.sequence([
      Animated.timing(pulse, {
        toValue: 1.2,
        duration: 200,
        easing: Easing.linear
      }),
      Animated.timing(pulse, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }),
      Animated.timing(pulse, {
        toValue: 0.8,
        duration: 200,
        easing: Easing.linear
      }),
      Animated.timing(pulse, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      })
    ]).start(event => {
      if (event.finished && shouldPulse) {
        pulseAnimation();
      }
    });
  };

  const navigateToShopId = shopkey => {
    navigation.navigate("ShopDetails", { shopkey });
  };

  const clearText = () => {
    textInput.setNativeProps({ text: "" });
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

  return (
    <View style={{ flex: 1 }}>
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
          ref={component => (textInput = component)}
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
      <View>
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
            <SVGMapLL navigateToShopId={navigateToShopId} />
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
            <SVGMapUL navigateToShopId={navigateToShopId} />
          </Animated.View>
          <Animated.View
            style={[
              styles.upButton,
              { opacity: 0.99, zIndex: 10 },
              { transform: [{ scale: pulse }] }
            ]}
          >
            <MaterialIcons
              name="chevron-right"
              style={{
                transform: [
                  { rotate: position === "left" ? "90deg" : "270deg" }
                ]
              }}
              size={40}
              color="white"
              onPress={scroll}
            />
          </Animated.View>
        </View>
      </View>
      <Button
        style={[theme.groupButton, styles.footer]}
        onPress={() => {
          navigateToShopList();
        }}
        color={colors.secondary}
        mode="contained"
      >
        Shop List
      </Button>
    </View>
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
    flex: 1,
    width: "100%",
    borderRadius: 0,
    position: "absolute",
    bottom: 0
  },
  addressBarTextInput: {
    backgroundColor: BGWASH,
    borderColor: "transparent",
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 14
  }
});
