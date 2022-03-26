import React from "react";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Notifications

// Import Custom Navigation
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import StacksNavigator from "./src/navigation/StacksNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <StacksNavigator />
    </NavigationContainer>
  );
};

export default App;
