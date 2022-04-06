import React, { useState } from "react";
import { AppRegistry, Platform } from "react-native";

// Import Theme Libraries
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { default as myTheme } from "./src/theme/theme.json";
import { ThemeContext } from "./src/context/ThemeContext";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

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
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ApplicationProvider {...eva} theme={{ ...eva[theme], ...myTheme }}>
        <NavigationContainer ref={navigationRef}>
          <StacksNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};

export default App;
