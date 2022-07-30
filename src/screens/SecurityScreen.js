import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import { useTheme } from "@ui-kitten/components";
import {
  SECURITY_PIN_SIZE,
  SECURITY_PIN_SPACING,
  STANDARD_SIZE,
} from "../constants/Fonts";
import NumberPad from "../components/NumberPad/NumberPad";

const SecurityScreen = () => {
  // Theme
  const theme = useTheme();

  return (
    <SafeAreaProvider
      style={{
        position: "absolute",
        display: "flex",

        height: "100%",
        width: "100%",

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: theme["color-primary-default"],

        zIndex: 99999,
      }}
    >
      <NumberPad size={"medium"} returnPin={(value) => setPincode(value)} />
      <Text>Sign Out instead?</Text>
    </SafeAreaProvider>
  );
};

export default SecurityScreen;
