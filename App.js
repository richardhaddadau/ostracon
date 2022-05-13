import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import checkForIdle from "./src/services/checkForIdle";

// Import Database Data
// import { FAUNA_OSTRACON_SECRET } from "@env";

// Import Theme Libraries
import { NativeBaseProvider, Box } from "native-base";
// import { default as lightOstracon } from "./src/theme/lightOstracon.json";
// import { default as darkOstracon } from "./src/theme/darkOstracon.json";
import lightOstracon from "./src/theme/lightOstracon";
import darkOstracon from "./src/theme/darkOstracon";
import { ThemeContext } from "./src/context/ThemeContext";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";

// Import Custom Navigation
import { navigationRef } from "./src/navigation/Member/RootNavigation";
import { MemberStack } from "./src/navigation/Member/MemberStack";
import GuestStack from "./src/navigation/Guest/GuestStack";

const CustomStatusBar = ({ backgroundColor, barStyle }) => {
  const insets = useSafeAreaInsets();

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
  checkForIdle();

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
    <SafeAreaProvider>
      {/* Colour status bar on iOS and Android */}
      <CustomStatusBar
        backgroundColor={isSignedIn ? "#121212" : "#363744"}
        barStyle={"light-content"}
      />

      <NativeBaseProvider theme={myTheme}>
        <NavigationContainer ref={navigationRef}>
          {isSignedIn === true ? (
            <MemberStack setSigned={(value) => setIsSignedIn(value)} />
          ) : (
            <GuestStack setSigned={setIsSignedIn} />
          )}
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
