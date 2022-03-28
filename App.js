import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Custom Navigation
import { navigationRef } from "./src/navigation/RootNavigation";
import { StacksNavigator } from "./src/navigation/StacksNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer ref={navigationRef}>
        <StacksNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

AppRegistry.registerComponent("Ostracon", () => App);
