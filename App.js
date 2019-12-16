import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import { SVGMapView } from "./components/SVGMapView";
import { ShopList } from "./components/ShopList";
import { ShopDetails } from "./components/ShopDetails";
import { Title } from "react-native-paper";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ClassyMall from "./img/ClassyMall";
import {
  HeaderButtons,
  HeaderButton,
  Item
} from "react-navigation-header-buttons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "./constants/colors";

const IoniconsHeaderButton = passMeFurther => (
  <HeaderButton
    {...passMeFurther}
    IconComponent={MaterialIcons}
    iconSize={20}
    color="#fff"
  />
);

const AppNavigator = createStackNavigator(
  {
    SVGMapView: {
      screen: SVGMapView
    },
    ShopList: {
      screen: ShopList
    },
    ShopDetails: {
      screen: ShopDetails
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTintColor: colors.secondary,
        headerTitle: (
          <View
            style={{
              flex: 1,
              flexDirection: "row"
            }}
          >
            <View
              style={[
                navigation.getParam("ShopDetails") && {
                  marginLeft: Platform.select({ ios: 0, android: -56 })
                },
                {
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }
              ]}
            >
              <Title>classy</Title>
              <ClassyMall />
              <Title>mall</Title>
            </View>
          </View>
        ),
        headerRight: navigation.getParam("ShopList") && (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item
              style={ss.addButton}
              color="#fff"
              title="search"
              iconName={
                navigation.getParam("viewType") === "list"
                  ? "view-carousel"
                  : "list"
              }
              onPress={() => {
                const headerButton = navigation.getParam("headerButton");
                headerButton();
              }}
            />
          </HeaderButtons>
        )
      };
    }
  }
);

const ss = StyleSheet.create({
  addButton: {
    backgroundColor: colors.secondary,
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8
  }
});

export default createAppContainer(AppNavigator);

// TODO Add Eslint (TS) and prettier

// TODO map not scrollable or does not fit screen (Lenovo C3)
