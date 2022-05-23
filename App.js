import React, { useState, useContext, useRef, useEffect } from "react";
import { View, StatusBar, AppState } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import * as Localization from "expo-localization";
import checkForIdle from "./src/services/checkForIdle";

// Import Database Data
import { FAUNA_OSTRACON_SECRET } from "@env";

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
import GuestStack from "./src/navigation/Guest/GuestStack";

const CustomStatusBar = ({ backgroundColor, barStyle }) => {
  const insets = useSafeAreaInsets();

  checkForIdle();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

export const App = () => {
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

  useEffect(() => {
    const userTimezone = Localization.timezone;
    console.log(userTimezone);
    console.log(
      new Date("2022-05-23T14:17:33.430Z").toLocaleString("en-us", {
        userTimezone,
      })
    );

    console.log(
      new Date("2022-05-23T14:17:33.430Z").toLocaleString("en-gb", {
        userTimezone,
        dateStyle: "full",
        timeStyle: "full",
      })
    );

    console.log(new Date("1987-09-17"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SafeAreaProvider>
        {/* Colour status bar on iOS and Android */}
        <CustomStatusBar
          backgroundColor={isSignedIn ? "#121212" : "#363744"}
          barStyle={"light-content"}
        />

        <ApplicationProvider {...eva} theme={{ ...eva[theme], ...myTheme }}>
          <NavigationContainer ref={navigationRef}>
            {isSignedIn === true ? (
              <MemberStack setSigned={(value) => setIsSignedIn(value)} />
            ) : (
              <GuestStack setSigned={setIsSignedIn} />
            )}
          </NavigationContainer>
        </ApplicationProvider>
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
};

export default App;
