import React from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";

// Import custom libraries
import CustomStatusBar from "../components/CustomStatusBar";
import { Image } from "react-native";
import { useTheme } from "@ui-kitten/components";
import { TYPICAL_MARGIN } from "../constants/constants";

const SplashScreen = () => {
  // Theme
  const theme = useTheme();

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomStatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <Image
        source={require("../../assets/Ostracon-Logo.png")}
        style={{
          marginBottom: TYPICAL_MARGIN,

          width: 170,
          height: 60,

          resizeMode: "contain",
        }}
      />

      <ActivityIndicator
        size={"large"}
        color={theme["color-secondary-default"]}
      />
    </SafeAreaProvider>
  );
};

export default SplashScreen;
