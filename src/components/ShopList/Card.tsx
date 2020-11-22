import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { Button } from "react-native-paper";
import { SharedElement } from "react-navigation-shared-element";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import theme from "../../constants/theme";

const Card = ({ shop, i, scrollX }) => {
  const { width } = useWindowDimensions();
  let inputRange = [
    (i - 1) * width,
    i * width,
    (i + 1) * width,
    (i + 2) * width,
  ];
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(scrollX?.value, inputRange, [0.3, 1, 0.3, 0.3]) },
    ],
  }));
  const navigation = useNavigation();
  const onShopSelect = (shopkey) => {
    navigation.navigate("ShopDetails", { shopkey, ShopDetails: true });
  };

  return (
    <View style={{ width, padding: 40 }} key={i}>
      <Animated.View style={[styles.innerContainer, animatedStyle]}>
        <View style={{ marginHorizontal: 80, width: "100%", height: "100%" }}>
          <SharedElement id={shop.key}>
            <Image source={shop.image} style={styles.image} />
          </SharedElement>
        </View>
        <Text style={[theme.title, { margin: 20 }]}>{shop.title}</Text>
        <View key={i} style={[theme.groupButton, styles.footer]}>
          <Button
            onPress={() => onShopSelect(shop.key)}
            color="black"
            mode="contained"
          >
            View Details
          </Button>
        </View>
      </Animated.View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  innerContainer: {
    paddingTop: 130,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#ffffff",
  },
  footer: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});
