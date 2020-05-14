import React from "react";
import { SVGMapView } from "../screens/SVGMapView";
import { ShopList } from "../screens/ShopList";
import { ShopDetails } from "../screens/ShopDetails";
import { colors } from "../constants/colors";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { View, Dimensions, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import ClassyMall from "../../assets/img/ClassyMall";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createSharedElementStackNavigator();
const { width } = Dimensions.get("window");

export const Routing = () => {
  return (
    <Stack.Navigator
      initialRouteName="SVGMapView"
      screenOptions={({ route: { params } }) => ({
        gestureEnabled: false,
        headerTintColor: colors.secondary,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: { opacity: progress },
        }),
        headerRight: () => {
          return (
            params?.ShopList && (
              <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                <Item
                  style={styles.addButton}
                  color="#fff"
                  title=""
                  iconName={
                    params?.viewType === "list"
                      ? "view-carousel"
                      : "format-list-bulleted"
                  }
                  onPress={params?.headerButton}
                />
              </HeaderButtons>
            )
          );
        },
        headerTitle: () => {
          return (
            <View pointerEvents="none" style={styles.header}>
              <Title>classy</Title>
              <ClassyMall />
              <Title>mall</Title>
            </View>
          );
        },
      })}
    >
      <Stack.Screen
        name="SVGMapView"
        component={SVGMapView}
        options={{ title: "Map View" }}
      />
      <Stack.Screen
        name="ShopList"
        component={ShopList}
        options={{ title: "Shop List" }}
      />
      <Stack.Screen
        name="ShopDetails"
        component={ShopDetails}
        initialParams={{ user: "Shop Details" }}
        sharedElementsConfig={({ params: { shopkey } }, otherRoute) =>
          otherRoute.name === "ShopList" && [shopkey]
        }
      />
    </Stack.Navigator>
  );
};

const IoniconsHeaderButton = (passMeFurther) => (
  <HeaderButton
    {...passMeFurther}
    IconComponent={MaterialCommunityIcons}
    iconSize={20}
    color="#fff"
  />
);

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: colors.secondary,
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  header: {
    width: width,
    right: -width / 2,
    height: "100%",
    top: "-50%",
    paddingBottom: 5,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
});

// TODO Add Eslint (TS) and prettier

// TODO map not scrollable or does not fit screen (Lenovo C3)
