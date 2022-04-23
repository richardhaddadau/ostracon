import React, { useState } from "react";
import { AppRegistry, Platform } from "react-native";

// Import Theme Libraries
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { default as lightOstracon } from "./src/theme/lightOstracon.json";
import { default as darkOstracon } from "./src/theme/darkOstracon.json";
import { ThemeContext } from "./src/context/ThemeContext";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Custom Navigation
import { navigationRef } from "./src/navigation/Member/RootNavigation";
import { MemberStack } from "./src/navigation/Member/MemberStack";
import SignInScreen from "./src/screens/SignInScreen";
import { registerRootComponent } from "expo";

if (Platform.OS === "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent("main", () => App);
}

const App = () => {
  // States
  const [theme, setTheme] = useState("light");
  const [myTheme, setMyTheme] = useState(lightOstracon);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    const myNextTheme = nextTheme === "light" ? lightOstracon : darkOstracon;
    setTheme(nextTheme);
    setMyTheme(myNextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ApplicationProvider {...eva} theme={{ ...eva[theme], ...myTheme }}>
        {isSignedIn === true ? (
          <NavigationContainer ref={navigationRef}>
            <MemberStack />
          </NavigationContainer>
        ) : (
          <SignInScreen />
        )}
      </ApplicationProvider>
    </ThemeContext.Provider>
  );
};

export default App;
