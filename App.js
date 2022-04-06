import React, { useState } from "react";
import { AppRegistry, Platform } from "react-native";

// Import Theme Libraries
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";

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
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer ref={navigationRef}>
        <StacksNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
