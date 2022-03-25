import React from "react";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Notifications
import * as Notifications from "expo-notifications";

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
