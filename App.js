import React, { useState } from "react";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Notifications

// Import Custom Navigation
import { navigationRef } from "./src/navigation/RootNavigation";
import { StacksNavigator } from "./src/navigation/StacksNavigator";

const App = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <StacksNavigator />
    </NavigationContainer>
  );
};

export default App;
