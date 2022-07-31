// Import standard libraries
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";

// Import custom libraries
import { SessionContextProvider } from "./src/context/SessionContext";
import CustomStatusBar from "./src/components/CustomStatusBar";
import SplashScreen from "./src/screens/SplashScreen";

// Import Theme libraries
import { ThemeContext } from "./src/context/ThemeContext";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { default as lightOstracon } from "./src/theme/lightOstracon.json";
import { default as darkOstracon } from "./src/theme/darkOstracon.json";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/navigation/Member/RootNavigation";
import { MemberStack } from "./src/navigation/Member/MemberStack";
import GuestStack from "./src/navigation/Guest/GuestStack";

// Import Database Libraries
import { faunaDriver } from "./src/utils/Fauna";
import { ostraconDriver } from "./src/utils/Ostracon";
import { getSecureStore } from "./src/utils/AsyncOps";
import SecurityScreen from "./src/screens/SecurityScreen";

export const App = () => {
  // States
  const [theme, setTheme] = useState("light");
  const [myTheme, setMyTheme] = useState(lightOstracon);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAppSecured, setIsAppSecured] = useState(false);

  // Theme switch control
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    const myNextTheme = nextTheme === "light" ? lightOstracon : darkOstracon;
    setTheme(nextTheme);
    setMyTheme(myNextTheme);
  };

  // On load, check if a user account is saved on the device
  useEffect(async () => {
    setIsLoading(true);

    await ostraconDriver.RunSetup();

    console.log(await getSecureStore("savedSettings"));

    const settingsObject = await getSecureStore("settingsSecureApp");
    const secureApp = settingsObject["secureApp"];

    const savedUser = await getSecureStore("savedAccount");

    // setIsAppSecured(secured);
    console.log(savedUser);
    console.log(secureApp);

    // If saved details have an account, attempt a login
    if (savedUser["account"]) {
      await faunaDriver.Login(
        savedUser["account"]["data"]["email"],
        savedUser["savedPass"]
      );

      setIsSignedIn(true);
    }

    // Could be temporary: give at least a second before switching splash screen off
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    // Wrap entire app with theme context
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {isLoading ? (
        // Show splash screen while loading
        <SplashScreen />
      ) : (
        // After loading, show authentication wrap
        <SessionContextProvider value={[isSignedIn, setIsSignedIn]}>
          <SafeAreaProvider>
            {/* Colour status bar on iOS and Android */}
            <CustomStatusBar
              backgroundColor={isSignedIn ? "#121212" : "#363744"}
              barStyle={"light-content"}
            />
            {/* Wrap main app with theme provider */}
            <ApplicationProvider {...eva} theme={{ ...eva[theme], ...myTheme }}>
              {/* Provide navigation reference */}
              <NavigationContainer ref={navigationRef}>
                {/* Show pincode security if app should be secured */}
                <SessionContextProvider value={[isAppSecured, setIsAppSecured]}>
                  {isAppSecured ? <SecurityScreen /> : null}
                </SessionContextProvider>
                {/* Deliver navigation stack based on login status */}
                {isSignedIn ? <MemberStack /> : <GuestStack />}
              </NavigationContainer>
            </ApplicationProvider>
          </SafeAreaProvider>
        </SessionContextProvider>
      )}
    </ThemeContext.Provider>
  );
};

export default App;
