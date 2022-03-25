import React from "react";
import { Text } from "react-native";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Notifications

// Import Custom Navigation
import DrawerNavigator from "./src/navigation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
