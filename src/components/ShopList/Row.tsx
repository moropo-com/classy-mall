import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";
import theme from "../../constants/theme";

const Row = ({ shop }) => {
  const navigation = useNavigation();
  const onShopSelect = () => {
    navigation.navigate("ShopDetails", {
      shopkey: shop.key,
      ShopDetails: true,
    });
  };
  return (
    <TouchableOpacity onPress={onShopSelect}>
      <View style={styles.row}>
        <SharedElement id={shop.key}>
          <Image
            source={
              typeof shop.image == "string" ? { uri: shop.image } : shop.image
            }
            style={styles.itemImage}
          />
        </SharedElement>
        <Text style={[theme.title, { margin: 20 }]}>{shop.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "lightgrey",
    marginVertical: 4,
    marginHorizontal: 8,
    flex: 1,
  },
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 16,
  },
});
