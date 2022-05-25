import React, { useState, useContext, useRef, useEffect } from "react";
import { View, StatusBar, AppState, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import * as Localization from "expo-localization";
import checkForIdle from "./src/services/checkForIdle";

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

// Import Moment
import moment from "moment";

import faunadb from "faunadb";

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

    // console.log(userTimezone);

    moment.locale("en-au");

    // const thisDate =
    //   Platform.OS === "ios"
    //     ? `iOS: ${new Date("2022-05-23T14:17:33.430Z").toLocaleDateString(
    //         "en-gb",
    //         {
    //           year: "numeric",
    //           month: "long",
    //           day: "2-digit",
    //           timeZone: userTimezone,
    //         }
    //       )}`
    //     : `Android: ${moment("2022-05-23T14:17:33.430Z").format(
    //         "D MMMM YYYY"
    //       )}`;

    const thisDate = moment("2022-05-23T14:17:33.430Z").format("D MMMM YYYY");

    console.log(`This: ${thisDate}`);

    // console.log(new Date("1987-09-17"));

    // Epoch the TS from the Document creation time
    // ToString the Epoch to return the time in String format
    // Use Expo Localization to get TimeZone
    // Use new Date() to set the TimeZone using EN-GB time
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
