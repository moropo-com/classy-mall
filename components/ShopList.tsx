import React, { Fragment, useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableHighlight,
  TextInput
} from "react-native";
import { SHOP_LIST } from "../constants/shopList";

const { width } = Dimensions.get("window");
import theme from "./theme";

import { Button, IconButton } from "react-native-paper";

const PADDING = 40;
const INDICATOR_CONTAINER_HEIGHT = 2;
const INDICATOR_CONTAINER_WIDTH = width - PADDING * 2;
const INDICATOR_WIDTH =
  INDICATOR_CONTAINER_WIDTH / Object.keys(SHOP_LIST).length;

export const ShopList = ({ navigation }) => {
  const [viewType, setViewType] = useState("cards");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredQuery = useRef("");

  const [scrollX] = useState(new Animated.Value(0));

  const headerButton = () =>
    setViewType(viewType == "cards" ? "list" : "cards");

  const clearText = () => {
    setSearchQuery("");
    filteredQuery.current = "";
  };

  useEffect(() => {
    navigation.setParams({ headerButton, viewType });
  }, [viewType]);

  useEffect(() => {
    filteredQuery.current = searchQuery.replace(/ /g, "").toLowerCase();
  }, [searchQuery]);

  const onShopSelect = shopkey => {
    navigation.navigate("ShopDetails", { shopkey, ShopDetails: true });
  };

  const renderCard = (shop, i) => {
    let inputRange = [
      (i - 1) * width,
      i * width,
      (i + 1) * width,
      (i + 2) * width
    ];

    return (
      <View style={[theme.container, styles.shopItem]} key={i}>
        <Animated.View
          style={[
            styles.innerContainer,
            { paddingTop: 130 },
            {
              transform: [
                {
                  scale: scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3, 0.3]
                  })
                }
              ]
            }
          ]}
        >
          <View style={{ width: width - 80, height: "100%" }}>
            <Image
              source={
                typeof shop.image == "string" ? { uri: shop.image } : shop.image
              }
              style={[
                {
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4
                }
              ]}
            />
          </View>
          <Text style={[theme.title, { margin: 20 }]}>{shop.title}</Text>

          {renderShopFooter(shop.key, i)}
        </Animated.View>
      </View>
    );
  };

  const renderRow = (shop, i) => {
    return (
      <TouchableHighlight
        underlayColor="rgba(0,0,0,0.1)"
        key={i}
        onPress={() => onShopSelect(shop.key)}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "lightgrey",
            width: width - 6,
            marginHorizontal: 3,
            marginVertical: 1
          }}
        >
          <Image
            source={
              typeof shop.image == "string" ? { uri: shop.image } : shop.image
            }
            style={styles.itemImage}
          />
          <Text
            style={[
              // theme.customFont,
              theme.title,
              { margin: 20 }
            ]}
          >
            {shop.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  const renderShopFooter = (shopkey, i) => {
    return (
      <View key={i} style={[theme.groupButton, styles.footer]}>
        <Button
          onPress={() => onShopSelect(shopkey)}
          color="black"
          mode="contained"
        >
          View Details
        </Button>
      </View>
    );
  };

  return (
    <Fragment>
      <View style={[theme.container, theme.bg, { paddingBottom: 30 }]}>
        {viewType == "cards" ? (
          <Animated.ScrollView
            pagingEnabled
            scrollEventThrottle={16}
            contentContainerStyle={styles.contentContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
          >
            {Object.keys(SHOP_LIST).map((shop, index) => {
              return renderCard(SHOP_LIST[shop], index);
            })}
          </Animated.ScrollView>
        ) : (
          <View>
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
                icon="clear"
              />
            </View>
            <ScrollView style={styles.scrollView}>
              {Object.keys(SHOP_LIST)
                .filter(name => {
                  return name.includes(filteredQuery.current);
                })
                .map((shop, index) => renderRow(SHOP_LIST[shop], index))}
            </ScrollView>
          </View>
        )}
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "#3cbc8d",
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    shadowColor: "#000000",
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 6,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  innerContainer: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff"
  },
  shopItem: {
    width: width,
    padding: 40
  },
  footer: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    overflow: "hidden",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    marginBottom: 30
  },
  indicator: {
    width: INDICATOR_WIDTH,
    height: INDICATOR_CONTAINER_HEIGHT,
    position: "absolute",
    top: 0,
    backgroundColor: "#c0c0c0"
  },
  indicatorContainer: {
    height: INDICATOR_CONTAINER_HEIGHT,
    marginVertical: 20,
    // backgroundColor: "red",
    // backgroundColor: "#ededed",
    position: "relative",
    width: INDICATOR_CONTAINER_WIDTH,
    paddingHorizontal: PADDING
  },
  inputContainer: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
    padding: 5,
    paddingLeft: 15,
    borderColor: "grey",
    borderRadius: 50,
    borderWidth: 1
  },
  clearButton: {
    position: "absolute",
    right: 0,
    top: -7,
    marginBottom: 30
  },
  scrollView: { width },
  itemImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 20
  },
  searchInput: {
    fontSize: 20
  }
});
