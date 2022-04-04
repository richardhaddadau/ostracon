import React, { useState } from "react";
import { AppRegistry, Platform } from "react-native";

// Import Theme Libraries
import { ThemeContext } from "./src/context/ThemeContext";
import { OstraconTheme } from "./src/theme/Theme";
import deepmerge from "deepmerge";

// Import Navigation Libraries
import {
  NavigationContainer,
  DefaultTheme as NavigateDefaultTheme,
  DarkTheme as NavigateDarkTheme,
} from "@react-navigation/native";

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
  // States
  return (
    <ThemeContext.Provider>
      <PaperProvider>
        <NavigationContainer ref={navigationRef}>
          <StacksNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default App;
