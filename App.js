import React, { useState } from "react";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Notifications

// Import Custom Navigation
import { navigationRef } from "./src/navigation/RootNavigation";
import StacksNavigator from "./src/navigation/StacksNavigator";
import BigButton from "./src/navigation/BigButton";

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StacksNavigator />
      <BigButton />
    </NavigationContainer>
  );
};

export default App;
