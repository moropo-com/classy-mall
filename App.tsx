import React, { useEffect, useRef, useState } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Routing } from "./src/navigation";
import { initialiseOtaManager } from "expo-ota-manager";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

try {
  SplashScreen.preventAutoHideAsync();
} catch (e) {
  console.warn(e);
}

export default function App() {
  const [played, setPlayed] = useState(false);
  const lottieRef = useRef<LottieView>();
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

  if (!played) {
    return (
      <LottieView
        ref={lottieRef}
        loop={false}
        style={{ flex: 1 }}
        source={require("./assets/img/openbag.json")}
        onAnimationFinish={() => setPlayed(true)}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: "white" },
        }}
      >
        <StatusBar translucent backgroundColor="white" />
        <Routing />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
