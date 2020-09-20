import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routing } from "./src/navigation";
import { initialiseOtaManager } from "expo-ota-manager";

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
      <Routing />
    </NavigationContainer>
  );
}
