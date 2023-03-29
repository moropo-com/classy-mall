import React from "react";

//TODO test comment 1


import { SVGMapView } from "../screens/SVGMapView";
import { ShopList } from "../screens/ShopList";
import { ShopDetails } from "../screens/ShopDetails";
import { colors } from "../constants/colors";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import {
  View,
  Dimensions,
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import { IconButton, Title } from "react-native-paper";
import ClassyMall from "../../assets/img/ClassyMall";

import { commonStyles } from "../constants/commonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Stack = createSharedElementStackNavigator();
const { width } = Dimensions.get("window");

export const Routing = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Stack.Navigator
      initialRouteName="SVGMapView"
      screenOptions={({ route: { params } }) => ({
        gestureEnabled: false,
        headerTintColor: colors.secondary,
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: { opacity: progress },
        }),
        headerRight: params?.ShopList
          ? () => (
              <IconButton
                style={styles.addButton}
                color="#fff"
                icon={
                  params?.viewType === "list"
                    ? "view-carousel"
                    : "format-list-bulleted"
                }
                onPress={params?.headerButton}
              />
            )
          : null,

        headerTitle: () => {
          return (
            <View
              pointerEvents="none"
              style={[styles.header, { marginTop: top }]}
            >
              <Title
                style={[
                  commonStyles.flexOne,
                  commonStyles.textAlignRight,
                  { lineHeight: 20 },
                ]}
              >
                classy
              </Title>
              <View style={styles.headerLogo}>
                <ClassyMall />
              </View>
              <Title style={[commonStyles.flexOne, { lineHeight: 20 }]}>
                mall
              </Title>
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
        sharedElements={({ params: { shopkey } }, otherRoute) =>
          otherRoute.name === "ShopList" && [shopkey]
        }
      />
    </Stack.Navigator>
  );
};

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
  headerLogo: { height: 25, width: 40 },
  header: {
    ...Platform.select({
      ios: {
        width: width,
        right: -width / 2,
        height: "100%",
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      android: {
        width: 180,
        flexDirection: "row",
        position: "absolute",
      },
    }),
  },
});

// TODO Add Eslint (TS) and prettier

// TODO map not scrollable or does not fit screen (Lenovo C3)
