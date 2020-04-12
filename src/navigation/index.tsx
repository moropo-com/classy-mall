import React from "react";
import { SVGMapView } from "../screens/SVGMapView";
import { ShopList } from "../screens/ShopList";
import { ShopDetails } from "../screens/ShopDetails";
import { colors } from "../constants/colors";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const Routing = () => {
  return (
    <Stack.Navigator
      initialRouteName="SVGMapView"
      screenOptions={{
        gestureEnabled: false,
        headerTintColor: colors.secondary,
      }}
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
      />
    </Stack.Navigator>
  );
};

// const IoniconsHeaderButton = (passMeFurther) => (
//   <HeaderButton
//     {...passMeFurther}
//     IconComponent={MaterialIcons}
//     iconSize={20}
//     color="#fff"
//   />
// );

// const ss = StyleSheet.create({
//   addButton: {
//     backgroundColor: colors.secondary,
//     height: 40,
//     width: 40,
//     borderRadius: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 8,
//   },
// });

// TODO Add Eslint (TS) and prettier

// TODO map not scrollable or does not fit screen (Lenovo C3)

// headerTitle: () => {
//   const { params } = useRoute();

//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: "row",
//       }}
//     >
//       <View
//         style={[
//           params.ShopDetails && {
//             marginLeft: Platform.select({ ios: 0, android: -56 }),
//           },
//           {
//             flex: 1,
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "center",
//           },
//         ]}
//       >
//         <Title>classy</Title>
//         <ClassyMall />
//         <Title>mall</Title>
//       </View>
//     </View>
//   );
// },
// headerRight: () => {
//   const { params } = useRoute();
//   return (
//     params.ShopList && (
//       <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
//         <Item
//           style={ss.addButton}
//           color="#fff"
//           title="search"
//           iconName={
//             params.viewType === "list" ? "view-carousel" : "list"
//           }
//           onPress={() => {
//             const headerButton = params.headerButton;
//             headerButton();
//           }}
//         />
//       </HeaderButtons>
//     )
//   );
// },
