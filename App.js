import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { AppRegistry, Platform } from "react-native";
import { name as appName } from "./app.json";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Custom Navigation
import { navigationRef } from "./src/navigation/RootNavigation";
import { StacksNavigator } from "./src/navigation/StacksNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { registerRootComponent } from "expo";

if (Platform.OS === "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent(appName, () => App);
}

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
