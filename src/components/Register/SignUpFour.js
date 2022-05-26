import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {
  LOGIN_HORIZONTAL_PADDING,
  LOGIN_VERTICAL_MARGIN,
  LOGIN_VERTICAL_PADDING,
} from "../../constants/constants";
import { useTheme } from "@ui-kitten/components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpFour = ({ signUpLocation, setSignUpLocation }) => {
  // Theme
  const theme = useTheme();

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        style={[
          styles.inputField,
          {
            backgroundColor: theme["color-surface"],
            borderColor: theme["color-post-border"],
            color: theme["color-primary-default"],
          },
        ]}
        onChangeText={(value) => setSignUpLocation(value)}
        value={signUpLocation}
        placeholder="Location"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"default"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    paddingVertical: LOGIN_VERTICAL_PADDING,
    paddingHorizontal: LOGIN_HORIZONTAL_PADDING,
    marginVertical: LOGIN_VERTICAL_MARGIN,

    width: "100%",

    borderRadius: 20,

    shadowOffset: { horizontal: 5, vertical: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 7,
    borderWidth: 0,
  },
});

export default SignUpFour;
