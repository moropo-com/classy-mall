import React from "react";
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
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Stack = createSharedElementStackNavigator();
const { width } = Dimensions.get("window");

export const Routing = () => {
  const { top } = useSafeAreaInsets();
  return (
    <Stack.Navigator
      initialRouteName="SVGMapView"
      screenOptions={({ route: { params, name } }) => ({
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
              <Title style={{ fontFamily: "regular", fontSize: 30 }}>
                classy mall
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
  headerLogo: { height: StatusBar.currentHeight, width: 40 },
  header: {
    ...Platform.select({
      ios: {
        width: width,
        right: -width / 2,
        height: "100%",
      },
      android: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    }),
    paddingBottom: 5,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

// TODO Add Eslint (TS) and prettier

// TODO map not scrollable or does not fit screen (Lenovo C3)
