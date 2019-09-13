import React from "react";
import { SVGWebView } from "./components/SVGWebView";
import { ShopList } from "./components/ShopList";
import { ShopDetails } from "./components/ShopDetails";

import { createStackNavigator, createAppContainer } from "react-navigation";
import { Image, View } from "react-native";
import { Title } from "react-native-paper";
import ClassyMall from "./img/ClassyMall";

const AppNavigator = createStackNavigator(
  {
    SVGWebView: {
      screen: SVGWebView
    },
    ShopList: {
      screen: ShopList
    },
    ShopDetails: {
      screen: ShopDetails
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Title>classy</Title>
          <ClassyMall />
          <Title>mall</Title>
        </View>
      )
    }
  }
);
export default createAppContainer(AppNavigator);
