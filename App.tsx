import React, { useEffect, useRef, useState } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Routing } from "./src/navigation";
import { initialiseOtaManager } from "expo-ota-manager";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import {
  configureFonts,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
try {
  SplashScreen.preventAutoHideAsync();
} catch (e) {
  console.warn(e);
}
export const DEFAULT_FONT_CONFIG = {
  light: { fontFamily: "light" },
  regular: { fontFamily: "regular" },
  bold: { fontFamily: "bold" },
  medium: { fontFamily: "regular" },
  thin: { fontFamily: "light" },
};
const fonts = configureFonts({
  ios: DEFAULT_FONT_CONFIG, // needs explicit dreclaration for iOS
  default: DEFAULT_FONT_CONFIG,
});

const theme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
  fonts,
};

export default function App() {
  const [played, setPlayed] = useState(false);
  const lottieRef = useRef<LottieView>();
  const [loaded] = useFonts({
    regular: require("./assets/fonts/Comfortaa-Regular.ttf"),
    light: require("./assets/fonts/Comfortaa-Light.ttf"),
    bold: require("./assets/fonts/Comfortaa-Bold.ttf"),
  });
  useEffect(() => {
    initialiseOtaManager({
      noButtonText: "Not Now",
      yesButtonText: "Restart and Update",
      textLines: ["Would you like to restart to start using it?"],
      titleText: "An update is available",
      repromptIntervalMs: 1000,
    });
    setTimeout(() => {
      lottieRef.current?.play();
      SplashScreen.hideAsync();
    }, 100);
  }, []);

  // if (!played) {
  //   return (
  //     <LottieView
  //       ref={lottieRef}
  //       loop={false}
  //       style={{ flex: 1 }}
  //       source={require("./assets/img/openbag.json")}
  //       onAnimationFinish={() => setPlayed(true)}
  //     />
  //   );
  // }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            colors: { ...DefaultTheme.colors, background: "white" },
          }}
        >
          <StatusBar translucent backgroundColor="white" />
          <Routing />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
