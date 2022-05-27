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
}) => {
  // Theme
  const theme = useTheme();

  useEffect(() => {
    isValid = [true, true];
  }, []);

  console.log(isValid);

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
        onChangeText={(value) => setSignUpEmail(value)}
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
            borderWidth: isValid[1] ? 0 : 3,
          },
        ]}
        onChangeText={async (value) => {
          setSignUpPass(value);
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
