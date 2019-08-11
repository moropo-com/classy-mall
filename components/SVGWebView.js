import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  WebView,
  Dimensions,
  Animated,
  Easing
} from "react-native";

import { Icon, Button } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";

import theme from "./theme";
var HEADER = "#3b5998";
var BGWASH = "rgba(255,255,255,0.8)";
var DISABLED_WASH = "rgba(255,255,255,0.25)";

const { width, height } = Dimensions.get("window");

// var AnimatedWebView = Animated.createAnimatedComponent(WebView)

export default class ScaledWebView extends React.Component {
  state = {
    scalingEnabled: false,
    left: new Animated.Value(0),
    position: "left",
    shouldPulseLeft: false,
    shouldPulseRight: false,
    pulseLeft: new Animated.Value(1),
    pulseRight: new Animated.Value(1)
  };

  postMessage = e => {
    this.webviewLL.postMessage(e.replace(/ /g, "").toLowerCase());
    this.webviewUL.postMessage(e.replace(/ /g, "").toLowerCase());
  };

  navigateToShopList() {
    this.props.navigation.navigate("ShopList");
  }

  handleMessage = e => {
    let result = e.nativeEvent.data.split(",");
    if (result[0] == "found") {
      result.shift();
      let floor = result.shift();
      this.handleSearchResults(result, floor);
    } else this.navigateToShopID(result);
  };

  handleSearchResults = (result, floor) => {
    if (floor == "UL" && result[0] != "" && !this.state.shouldPulseRight) {
      this.setState({ shouldPulseRight: true });
      this.pulseRightAnimation();
    } else if (
      floor == "UL" &&
      result[0] == "" &&
      this.state.shouldPulseRight
    ) {
      this.setState({ shouldPulseRight: false });
    }

    if (floor == "LL" && result[0] != "" && !this.state.shouldPulseLeft) {
      this.setState({ shouldPulseLeft: true });
      this.pulseLeftAnimation();
    } else if (floor == "LL" && result[0] == "" && this.state.shouldPulseLeft) {
      this.setState({ shouldPulseLeft: false });
    }
  };

  pulseLeftAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.pulseLeft, {
        toValue: 1.2,
        duration: 200,
        easing: Easing.linear
      }),
      Animated.timing(this.state.pulseLeft, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }),
      Animated.timing(this.state.pulseLeft, {
        toValue: 0.8,
        duration: 200,
        easing: Easing.linear
      }),
      Animated.timing(this.state.pulseLeft, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      })
    ]).start(event => {
      if (event.finished && this.state.shouldPulseLeft) {
        this.pulseLeftAnimation();
      }
    });
  };

  pulseRightAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.pulseRight, {
        toValue: 1.2,
        duration: 200,
        easing: Easing.linear
      }),
      Animated.timing(this.state.pulseRight, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      }),
      Animated.timing(this.state.pulseRight, {
        toValue: 0.8,
        duration: 200,
        easing: Easing.linear
      }),
      Animated.timing(this.state.pulseRight, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear
      })
    ]).start(event => {
      if (event.finished && this.state.shouldPulseRight) {
        this.pulseRightAnimation();
      }
    });
  };

  navigateToShopID = e => {
    const shopkey = e.toString();
    // .nativeEvent.data.toString();
    this.props.navigation.navigate("ShopDetails", { shopkey });
  };

  clearText = () => {
    this._textInput.setNativeProps({ text: "" });
    this.postMessage("");
  };

  scrollRight = () => {
    Animated.timing(this.state.left, {
      // and twirl
      toValue: -width
    }).start();
    this.setState({ position: "right" });
  };

  scrollLeft = () => {
    Animated.timing(this.state.left, {
      // and twirl
      toValue: 0
    }).start();
    this.setState({ position: "left" });
  };

  render() {
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
            ref={component => (this._textInput = component)}
            style={{ fontSize: 20 }}
            onChangeText={this.postMessage}
            placeholder="Search"
          />
          <Icon
            style={{
              position: "absolute",
              color: "grey",
              right: 5,
              top: 4,
              fontSize: 30
            }}
            onPress={this.clearText}
            name="ios-close-circle-outline"
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
                opacity: this.state.left.interpolate({
                  inputRange: [-width, 0],
                  outputRange: [0, 1]
                }),
                transform: [
                  {
                    scale: this.state.left.interpolate({
                      inputRange: [-width, 0],
                      outputRange: [0, 1]
                    })
                  }
                ],
                left: this.state.left.interpolate({
                  inputRange: [-width, -width + 1, 0],
                  outputRange: [1000, 0, 0]
                })
              }}
            >
              <WebView
                ref={webview => {
                  this.webviewLL = webview;
                }}
                style={{
                  // backgroundColor: BGWASH,
                  backgroundColor: "transparent",
                  height: height,
                  width: width,
                  position: "absolute",
                  opacity: 0.99
                }}
                source={require("./SVGMapLL.html")}
                scalesPageToFit={this.state.scalingEnabled}
                onMessage={this.handleMessage}
              />
              <Animated.View
                style={[
                  styles.upButton,
                  { opacity: 0.99 },
                  { transform: [{ scale: this.state.pulseRight }] }
                ]}
              >
                <MaterialIcons
                  name="chevron-right"
                  style={{ transform: [{ rotate: "270deg" }] }}
                  size={40}
                  color="white"
                  onPress={this.scrollRight}
                />
              </Animated.View>
            </Animated.View>
            <Animated.View
              style={{
                height: height,
                width: width,
                position: "absolute",
                opacity: this.state.left.interpolate({
                  inputRange: [-width, 0],
                  outputRange: [1, 0]
                }),
                transform: [
                  {
                    scale: this.state.left.interpolate({
                      inputRange: [-width, 0],
                      outputRange: [1, 2]
                    })
                  }
                ],
                left: this.state.left.interpolate({
                  inputRange: [-width, -1, 0],
                  outputRange: [0, 0, 1000]
                })
              }}
            >
              <WebView
                ref={webview => {
                  this.webviewUL = webview;
                }}
                style={{
                  backgroundColor: "transparent",
                  // backgroundColor: BGWASH,
                  height: height,
                  width: width,
                  position: "absolute",
                  opacity: 0.99
                }}
                source={require("./SVGMapUL.html")}
                scalesPageToFit={this.state.scalingEnabled}
                onMessage={this.handleMessage}
              />
              <Animated.View
                style={[
                  styles.downButton,
                  { opacity: 0.99 },
                  { transform: [{ scale: this.state.pulseLeft }] }
                ]}
              >
                <MaterialIcons
                  name="chevron-right"
                  style={{ transform: [{ rotate: "90deg" }] }}
                  size={40}
                  color="white"
                  onPress={this.scrollLeft}
                />
              </Animated.View>
            </Animated.View>
          </View>
        </View>
        {this._renderShopFooter()}
      </View>
    );
  }

  _renderShopFooter() {
    return (
      <View style={[theme.groupButton, styles.footer]}>
        <Button
          onPress={() => {
            this.navigateToShopList();
          }}
          color="black"
          mode="contained"
        >
          Shop List
        </Button>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  downButton: {
    backgroundColor: "#3cbc8d",
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
  upButton: {
    backgroundColor: "#3cbc8d",
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
  container: {
    flex: 1,
    backgroundColor: HEADER
  },
  footer: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    overflow: "hidden",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    position: "absolute",
    bottom: 0
  },
  addressBarRow: {
    flexDirection: "row",
    padding: 8
  },
  webView: {
    backgroundColor: BGWASH,
    height: 350
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
  },
  navButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BGWASH,
    borderColor: "transparent",
    borderRadius: 3
  },
  disabledButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: DISABLED_WASH,
    borderColor: "transparent",
    borderRadius: 3
  },
  goButton: {
    height: 24,
    padding: 3,
    marginLeft: 8,
    alignItems: "center",
    backgroundColor: BGWASH,
    borderColor: "transparent",
    borderRadius: 3,
    alignSelf: "stretch"
  },
  statusBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    height: 22
  },
  statusBarText: {
    color: "white",
    fontSize: 13
  },
  spinner: {
    width: 20,
    marginRight: 6
  },
  buttons: {
    flexDirection: "row",
    height: 30,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    flex: 0.5,
    width: 0,
    margin: 5,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "gray"
  }
});
