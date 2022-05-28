import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import {
  LOGIN_HORIZONTAL_PADDING,
  LOGIN_VERTICAL_MARGIN,
  LOGIN_VERTICAL_PADDING,
} from "../../constants/constants";

import { useTheme } from "@ui-kitten/components";
import { resetIsValid } from "../../utils/AsyncOps";

const SignUpOne = ({
  signUpEmail,
  setSignUpEmail,
  signUpPass,
  setSignUpPass,
  isValid,
  setIsValid,
}) => {
  // Theme
  const theme = useTheme();

  useEffect(() => {
    setIsValid([true, true]);
  }, []);

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        style={[
          styles.inputField,
          {
            backgroundColor: theme["color-surface"],
            color: theme["color-primary-default"],

            borderColor: theme["color-danger-400"],
            borderWidth: isValid[0] ? 0 : 3,
          },
        ]}
        onChangeText={(value) => {
          setSignUpEmail(value);
          value !== null && value.includes("@")
            ? (isValid[0] = true)
            : (isValid[0] = false);

          console.log(isValid);
        }}
        value={signUpEmail}
        placeholder="Email"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"email-address"}
      />
      <TextInput
        style={[
          styles.inputField,
          {
            backgroundColor: theme["color-surface"],
            color: theme["color-primary-default"],

            borderColor: theme["color-danger-400"],
            borderWidth: isValid[1] || signUpPass !== null ? 0 : 3,
          },
        ]}
        onChangeText={(value) => {
          setSignUpPass(value);
          value.length > 0 ? (isValid[1] = true) : (isValid[1] = false);
        }}
        value={signUpPass}
        placeholder="Password"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"default"}
        secureTextEntry={true}
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

    borderRadius: 100,

    shadowOffset: { horizontal: 5, vertical: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 7,
  },
});

export default SignUpOne;
