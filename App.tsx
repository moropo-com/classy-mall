import React, { useEffect, useState } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Routing } from "./src/navigation";
import { initialiseOtaManager } from "expo-ota-manager";
import { StatusBar } from "react-native";
import LottieView from "lottie-react-native";

export default function App() {
  const [played, setPlayed] = useState(false);
  useEffect(() => {
    initialiseOtaManager({
      noButtonText: "Not Now",
      yesButtonText: "Restart and Update",
      textLines: ["Would you like to restart to start using it?"],
      titleText: "An update is available",
      repromptIntervalMs: 1000,
    });
  }, []);

  if (!played) {
    return (
      <LottieView
        autoPlay
        loop={false}
        style={{ flex: 1 }}
        source={require("./assets/img/openbag.json")}
        onAnimationFinish={() => setPlayed(true)}
      />
    );
  }

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: "white" },
      }}
    >
      <StatusBar translucent backgroundColor="white" />
      <Routing />
    </NavigationContainer>
  );
}
