import React, { Fragment } from "react";
import { View, Text, StyleSheet, Animated, Image } from "react-native";
import theme, { sizes } from "../constants/theme";
import { SHOP_LIST } from "../constants/shopList";
import { MaterialIcons } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { SharedElement } from "react-navigation-shared-element";

const NAV_HEIGHT = 80;
const HERO_HEIGHT = 440;
const HERO_IMAGE_CONTAINER_HEIGHT = HERO_HEIGHT - 100;

export const ShopDetails = ({ route }) => {
  const [scrollY] = React.useState(new Animated.Value(0));
  const { shopkey = "orangecafe" } = route.params;
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
    return (
      <Animated.View
        style={[
          styles.navbar,
          { zIndex: 5, backgroundColor: "#fff" },
          {
            opacity: scrollY.interpolate({
              inputRange: [
                0,
                HERO_HEIGHT - NAV_HEIGHT - 11,
                HERO_HEIGHT - NAV_HEIGHT - 10,
                HERO_HEIGHT,
              ],
              outputRange: [0, 0, 1, 1],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <View style={[styles.container, styles.navigationDetails]}>
          <Animated.View
            style={[
              styles.container,
              {
                transform: [
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [0, HERO_HEIGHT - 90],
                      outputRange: [HERO_HEIGHT - 90, 0],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              },
            ]}
          >
            <Text style={[theme.title]} numberOfLines={1}>
              {shop.title}
            </Text>
          </Animated.View>
        </View>
      </Animated.View>
    );
  };

  const renderHero = () => {
    return (
      <View style={[styles.hero]}>
        <View style={styles.heroImageContainer}>
          <SharedElement id={shopkey}>
            <Image source={shop.image} style={[theme.imageHero]} />
          </SharedElement>
        </View>
        <View style={[styles.container]}>
          <Text style={theme.title} numberOfLines={1}>
            {shop.title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          <Animated.ScrollView
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
    </Fragment>
  );
};

const PromoCarousel = ({ promos }) => (
  <Swiper style={{ height: 200 }} autoplay>
    {promos.map((promo, id) => (
      <View
        key={id}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={promo} style={{ flex: 1, resizeMode: "contain" }} />
      </View>
    ))}
  </Swiper>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: sizes.screenWidth,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navigationBarAction: {
    width: sizes.placeholderSize,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    width: sizes.placeholderSize,
  },

  shopDetailsContainer: {
    paddingTop: NAV_HEIGHT,
  },

  navbar: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: NAV_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#ddd",
  },
  navigationDetails: {
    height: NAV_HEIGHT,
    position: "relative",
  },

  // Hero
  hero: {
    alignItems: "center",
    justifyContent: "center",
    height: HERO_HEIGHT,
    position: "relative",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  colorPicker: {
    padding: sizes.defaultSpacing / 2,
    borderTopRightRadius: 8,
    borderWidth: 1,
    borderBottomRightRadius: 8,
    borderLeftWidth: 0,
    borderColor: "#eee",
  },
  heroImageContainer: {
    height: HERO_IMAGE_CONTAINER_HEIGHT,
  },
  colorPickerContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    height: HERO_IMAGE_CONTAINER_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
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
      width: 0,
    },
  },
});
