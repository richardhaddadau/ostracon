import React, { useState } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { AppRegistry, Platform } from "react-native";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Custom Navigation
import { navigationRef } from "./src/navigation/RootNavigation";
import { StacksNavigator } from "./src/navigation/StacksNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { registerRootComponent } from "expo";
import { OSTRACON_ACCENT, OSTRACON_PRIMARY } from "./src/theme/OstraconColours";

if (Platform.OS === "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent("main", () => App);
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: OSTRACON_PRIMARY,
    accent: OSTRACON_ACCENT,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <StacksNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
