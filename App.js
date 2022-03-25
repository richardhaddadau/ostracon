import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Notifications
import * as Notifications from "expo-notifications";

// Import Custom Navigation
import BottomTabs from "./src/navigation/BottomTabs";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
