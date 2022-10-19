import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import { SHOP_LIST } from "../constants/shopList";
import { IconButton } from "react-native-paper";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { IShopList } from "../types";
import Card from "../components/ShopList/Card";
import Row from "../components/ShopList/Row";

const AnimatedFlatList: typeof FlatList =
  Animated.createAnimatedComponent(FlatList);

export const ShopList = ({ navigation }) => {
  const [viewType, setViewType] = useState("cards");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const headerButton = () =>
    setViewType(viewType == "cards" ? "list" : "cards");

  const clearText = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    navigation.setParams({ headerButton, viewType });
  }, [viewType]);

  return (
    <View style={styles.container}>
      {viewType == "cards" ? (
        <AnimatedFlatList<IShopList>
          pagingEnabled
          scrollEventThrottle={16}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          onScroll={scrollHandler}
          data={Object.values(SHOP_LIST)}
          renderItem={({ item: shop, index }) => (
            <Card shop={shop} i={index} scrollX={scrollX} />
          )}
        />
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              underlineColorAndroid="transparent"
              value={searchQuery}
              style={styles.searchInput}
              onChangeText={setSearchQuery}
              placeholder="Search"
            />
            <IconButton
              color="grey"
              style={styles.clearButton}
              onPress={clearText}
              icon="close-circle-outline"
            />
          </View>
          <FlatList
            style={{ flex: 1 }}
            keyExtractor={(item) => item}
            data={Object.keys(SHOP_LIST).filter((name) =>
              name.includes(searchQuery.replace(/ /g, "").toLowerCase())
            )}
            renderItem={({ item: shop }) => <Row shop={SHOP_LIST[shop]} />}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingBottom: 30, flex: 1 },
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 5,
    paddingLeft: 15,
    borderColor: "grey",
    borderRadius: 50,
    borderWidth: 1,
    position: "relative",
  },
  clearButton: {
    position: "absolute",
    right: 0,
    top: -7,
  },
  searchInput: {
    fontSize: 20,
  },
});
