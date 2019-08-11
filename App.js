import { MapView } from "./components/MapView";
import SVGWebView from "./components/SVGWebView";
import ShopList from "./components/ShopList";
import ShopDetails from "./components/ShopDetails";

import { createStackNavigator, createAppContainer } from "react-navigation";

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
    navigationBar: {
      renderTitle: Title,
      renderLeft: () => (
        <Text style={{ color: "lightgrey", fontSize: 25 }}>V2.8</Text>
      )
    }
  }
);

const Title = () => (
  <Image
    source={require("./img/logo.jpg")}
    style={{ flex: 1, width: null, height: null }}
    resizeMode="contain"
  />
);
export default createAppContainer(AppNavigator);
