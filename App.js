import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { OstraconTheme } from "./src/theme/Theme";
import { AppRegistry, Platform } from "react-native";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Custom Navigation
import { navigationRef } from "./src/navigation/RootNavigation";
import { StacksNavigator } from "./src/navigation/StacksNavigator";
import { registerRootComponent } from "expo";

if (Platform.OS === "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent("main", () => App);
}

const App = () => {
  return (
    <PaperProvider theme={OstraconTheme}>
      <NavigationContainer ref={navigationRef}>
        <StacksNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
