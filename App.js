import React, { useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Custom Navigation
import { navigationRef } from "./src/navigation/RootNavigation";
import { StacksNavigator } from "./src/navigation/StacksNavigator";

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
