import React, { useState } from "react";
import { AppRegistry, Platform } from "react-native";

// Import Theme Libraries
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { OstraconTheme } from "./src/theme/Theme";
import { ThemeContext } from "./src/context/ThemeContext";
import deepmerge from "deepmerge";

// Import Navigation Libraries
import {
  NavigationContainer,
  DefaultTheme as NavigateDefaultTheme,
  DarkTheme as NavigateDarkTheme,
} from "@react-navigation/native";

// Import Custom Navigation
import { navigationRef } from "./src/navigation/RootNavigation";
import { StacksNavigator } from "./src/navigation/StacksNavigator";
import { registerRootComponent } from "expo";

if (Platform.OS === "android") {
  registerRootComponent(App);
} else {
  AppRegistry.registerComponent("main", () => App);
}

const OstraconDefaultTheme = deepmerge(PaperDefaultTheme, NavigateDefaultTheme);
const OstraconDarkTheme = deepmerge(PaperDarkTheme, NavigateDarkTheme);

const App = () => {
  // States
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? OstraconDarkTheme : OstraconDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <ThemeContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme} ref={navigationRef}>
          <StacksNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export default App;
