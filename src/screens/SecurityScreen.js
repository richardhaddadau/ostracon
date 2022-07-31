import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";
import { useTheme } from "@ui-kitten/components";

import NumberPad from "../components/NumberPad/NumberPad";
import { faunaDriver } from "../utils/Fauna";

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
      <Text
        style={[styles.headingText, { color: theme["color-secondary-300"] }]}
      >
        Enter your PIN code
      </Text>
      <NumberPad size={"medium"} />
      <Text style={[styles.orText, { color: theme["color-secondary-400"] }]}>
        or
      </Text>
      <TouchableHighlight
        onPress={async () => {
          await faunaDriver.Logout();
        }}
      >
        <View>
          <Text
            style={[
              styles.signOutText,
              { color: theme["color-secondary-300"] },
            ]}
          >
            Switch User
          </Text>
        </View>
      </TouchableHighlight>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headingText: {
    marginBottom: 50,
    fontSize: 22,
  },
  orText: { marginTop: 25, color: "white" },
  signOutText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SecurityScreen;
