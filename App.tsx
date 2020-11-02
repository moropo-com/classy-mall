import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routing } from "./src/navigation";
import { initialiseOtaManager } from "expo-ota-manager";
import { StatusBar } from "react-native";

export default function App() {
  useEffect(() => {
    initialiseOtaManager({
      noButtonText: "Not Now",
      yesButtonText: "Restart and Update",
      textLines: ["Would you like to restart to start using it?"],
      titleText: "An update is available",
      repromptIntervalMs: 1000,
    });
  }, []);

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="white" />
      <Routing />
    </NavigationContainer>
  );
}
