import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image
} from "react-native";

import { Button } from "react-native-paper";
import theme, { sizes } from "./theme";
import { SHOP_LIST } from "./ShopList";

import Carousel from "react-native-looped-carousel";

const NAV_HEIGHT = 80;
const HERO_HEIGHT = 440;
const HERO_IMAGE_CONTAINER_HEIGHT = HERO_HEIGHT - 100;

export default class ShopDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  // componentDidMount() {
  //   this.state.scrollY.addListener(this.updateView.bind(this));
  // }

  // componentWillUnmount() {
  //   this.state.scrollY.removeListener()
  // }

  // updateView(offset) {
  //   // this.state.scrollY.setValue(offset.value)
  // }

  componentWillMount() {
    this.shop = SHOP_LIST[this.props.shopkey || "woolworths"];
  }

  render() {
    const stars = [];
    // for (var i = 1; i < 6; i++) {
    //   i <= this.shop.rating
    //     ? stars.push(
    //         <Ionicons key={i} name="ios-star" size={30} color="#FFD700" />
    //       )
    //     : stars.push(
    //         <Ionicons key={i} name="ios-star-outline" size={30} color="black" />
    //       );
    // }
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 1, width: sizes.screenWidth, marginTop: NAV_HEIGHT }}
        >
          <Animated.ScrollView
            contentContainerStyle={[styles.contentContainer]}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
              { useNativeDriver: true }
            )}
          >
            {this._renderHero()}
            {this.shop.promos ? (
              <PromoCarousel promos={this.shop.promos} />
            ) : null}
            <View style={{ alignItems: "center" }}>
              <Text
                style={[
                  theme.title,
                  // theme.customFont,
                  { margin: sizes.defaultSpacing }
                ]}
              >
                Rating
              </Text>
              <View style={{ flexDirection: "row" }}>
                {stars.map((star, index) => star)}
              </View>

              <Text
                style={[
                  theme.title,
                  // theme.customFont,
                  { margin: sizes.defaultSpacing }
                ]}
              >
                Description
              </Text>
              <Text
                style={[
                  // theme.customFont,
                  { margin: sizes.defaultSpacing }
                ]}
              >
                {this.shop.description}
              </Text>

              <Text
                style={[
                  theme.title,
                  // theme.customFont,
                  { margin: sizes.defaultSpacing }
                ]}
              >
                Opening Hours
              </Text>
              {Object.keys(this.shop.openingHours).map((key, index) => (
                <Text
                  key={index}
                  style={[
                    // theme.customFont,
                    { margin: sizes.defaultSpacing, marginTop: 0 }
                  ]}
                >
                  {key} : {this.shop.openingHours[key]}{" "}
                </Text>
              ))}
            </View>
          </Animated.ScrollView>
          {this._renderShopFooter()}
        </View>
        {this._renderNavigation()}
      </View>
    );
  }

  goBack() {
    this.props.navigator.pop();
  }

  _renderNavigation() {
    return (
      <Animated.View style={[styles.navbar, { zIndex: 5 }]}>
        <TouchableOpacity onPress={() => this.goBack()}>
          {/* <Ionicons
            name="ios-arrow-round-back-outline"
            size={60}
            style={[styles.placeholder, styles.backButton]}
            color={"#999"}
          /> */}
        </TouchableOpacity>
        <View style={[styles.container, styles.navigationDetails]}>
          <Animated.View
            style={[
              styles.container,
              {
                opacity: this.state.scrollY.interpolate({
                  inputRange: [
                    -1,
                    0,
                    HERO_HEIGHT - NAV_HEIGHT,
                    HERO_HEIGHT + 50
                  ],
                  outputRange: [0, 0, 0, 1]
                }),
                transform: [
                  {
                    translateY: this.state.scrollY.interpolate({
                      inputRange: [
                        0,
                        HERO_HEIGHT / 2,
                        HERO_HEIGHT,
                        HERO_HEIGHT + 1
                      ],
                      outputRange: [NAV_HEIGHT + 50, NAV_HEIGHT + 50, 0, 0]
                    })
                  }
                ]
              }
            ]}
          >
            <Text
              style={[
                // theme.customFont,
                theme.title
              ]}
              numberOfLines={1}
            >
              {this.shop.title}
            </Text>
          </Animated.View>
        </View>
        <View style={styles.placeholder} />
      </Animated.View>
    );
  }

  _renderHero() {
    return (
      <View style={styles.hero}>
        <View style={styles.heroImageContainer}>
          <Animated.Image
            source={
              typeof this.shop.image == "string"
                ? { uri: this.shop.image }
                : this.shop.image
            }
            style={[theme.image, theme.imageHero, { zIndex: 10 }]}
          />
        </View>
        <View style={[styles.container]}>
          <Text
            style={[
              // theme.customFont,
              theme.title
            ]}
            numberOfLines={1}
          >
            {this.shop.title}
          </Text>
        </View>
      </View>
    );
  }

  _renderShopFooter() {
    return (
      <View style={[theme.groupButton, styles.footer]}>
        <Button onPress={() => this.goBack()} color="black" mode="contained">
          Go Back
        </Button>
      </View>
    );
  }
}

class PromoCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width: sizes.screenWidth, height: sizes.screenWidth / 2 }
    };
  }

  _onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel delay={4000} style={this.state.size} autoplay bullets>
          {this.props.promos.map((promo, id) => (
            <View key={id} style={this.state.size}>
              <Image
                source={promo}
                style={[this.state.size, { resizeMode: "contain" }]}
              />
            </View>
          ))}
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  navigationBarAction: {
    width: sizes.placeholderSize,
    alignItems: "center",
    justifyContent: "center"
  },
  placeholder: {
    width: sizes.placeholderSize
  },

  shopDetailsContainer: {
    paddingTop: NAV_HEIGHT
  },

  navbar: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: NAV_HEIGHT,
    paddingTop: 60,
    alignItems: "center",
    paddingHorizontal: sizes.defaultSpacing,
    borderBottomColor: "#ddd"
  },
  navigationDetails: {
    height: NAV_HEIGHT,
    position: "relative"
  },

  // Hero
  hero: {
    alignItems: "center",
    justifyContent: "center",
    height: HERO_HEIGHT,
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  colorPicker: {
    padding: sizes.defaultSpacing / 2,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderBottomRightRadius: 8,
    borderLeftWidth: 0,
    borderColor: "#eee"
  },
  heroImageContainer: {
    height: HERO_IMAGE_CONTAINER_HEIGHT
  },
  colorPickerContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    height: HERO_IMAGE_CONTAINER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2
  },

  footer: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0
    }
  }
});
