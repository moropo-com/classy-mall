import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Routing } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Routing />
    </NavigationContainer>
  );
}
