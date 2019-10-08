import React from "react";

import { View, Text, StyleSheet, Animated, Image } from "react-native";

import theme, { sizes } from "./theme";
import { SHOP_LIST } from "../constants/constants";
import { MaterialIcons } from "@expo/vector-icons";

import Carousel from "react-native-looped-carousel";

const NAV_HEIGHT = 80;
const HERO_HEIGHT = 440;
const HERO_IMAGE_CONTAINER_HEIGHT = HERO_HEIGHT - 100;

export const ShopDetails = ({ navigation }) => {
  const [scrollY] = React.useState(new Animated.Value(0));
  const shopkey = navigation.getParam("shopkey", "orangecafe");
  const shop = SHOP_LIST[shopkey];
  const stars = [];
  for (var i = 1; i < 6; i++) {
    i <= shop.rating
      ? stars.push(
          <MaterialIcons key={i} name="star" size={30} color="#FFD700" />
        )
      : stars.push(
          <MaterialIcons key={i} name="star-border" size={30} color="black" />
        );
  }

  const renderNavigation = () => {
    const heightOffset = 90;
    return (
      <Animated.View style={[styles.navbar, { zIndex: 5 }]}>
        <View style={[styles.container, styles.navigationDetails]}>
          <Animated.View
            style={[
              styles.container,
              {
                opacity: scrollY.interpolate({
                  inputRange: [
                    -5,
                    -5,
                    HERO_HEIGHT - NAV_HEIGHT,
                    HERO_HEIGHT + heightOffset
                  ],
                  outputRange: [0, 0, 0, 1]
                }),
                transform: [
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [
                        0,
                        HERO_HEIGHT / 2,
                        HERO_HEIGHT,
                        HERO_HEIGHT + 1
                      ],
                      outputRange: [
                        NAV_HEIGHT + heightOffset,
                        NAV_HEIGHT + heightOffset,
                        0,
                        0
                      ]
                    })
                  }
                ]
              }
            ]}
          >
            <Text style={theme.title} numberOfLines={1}>
              {shop.title}
            </Text>
          </Animated.View>
        </View>
      </Animated.View>
    );
  };

  const renderHero = () => {
    return (
      <View style={styles.hero}>
        <View style={styles.heroImageContainer}>
          <Animated.Image
            source={
              typeof shop.image == "string" ? { uri: shop.image } : shop.image
            }
            style={[theme.image, theme.imageHero, { zIndex: 10 }]}
          />
        </View>
        <View style={[styles.container]}>
          <Text style={theme.title} numberOfLines={1}>
            {shop.title}
          </Text>
        </View>
      </View>
    );
  };

  // componentDidMount() {
  //   this.state.scrollY.addListener(this.updateView.bind(this));
  // }

  // componentWillUnmount() {
  //   this.state.scrollY.removeListener()
  // }

  // updateView(offset) {
  //   // this.state.scrollY.setValue(offset.value)
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
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {renderHero()}
          {shop.promos ? <PromoCarousel promos={shop.promos} /> : null}
          <View style={{ alignItems: "center" }}>
            <Text style={[theme.title, { margin: sizes.defaultSpacing }]}>
              Rating
            </Text>
            <View style={{ flexDirection: "row" }}>{stars}</View>

            <Text style={[theme.title, { margin: sizes.defaultSpacing }]}>
              Description
            </Text>
            <Text style={{ margin: sizes.defaultSpacing }}>
              {shop.description}
            </Text>

            <Text style={[theme.title, { margin: sizes.defaultSpacing }]}>
              Opening Hours
            </Text>
            {Object.keys(shop.openingHours).map((key, index) => (
              <Text
                key={index}
                style={{ margin: sizes.defaultSpacing, marginTop: 0 }}
              >
                {key} : {shop.openingHours[key]}
              </Text>
            ))}
          </View>
        </Animated.ScrollView>
      </View>
      {renderNavigation()}
    </View>
  );
};

const PromoCarousel = ({ promos }) => {
  const [size, setSize] = React.useState({
    width: sizes.screenWidth,
    height: sizes.screenWidth / 2
  });

  const onLayoutDidChange = e => {
    const layout = e.nativeEvent.layout;
    setSize({ width: layout.width, height: layout.height });
  };

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutDidChange}>
      <Carousel delay={4000} style={size} autoplay bullets>
        {promos.map((promo, id) => (
          <View key={id} style={size}>
            <Image source={promo} style={[size, { resizeMode: "contain" }]} />
          </View>
        ))}
      </Carousel>
    </View>
  );
};

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
    // paddingTop: 60,
    alignItems: "center",
    justifyContent: "center",
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
