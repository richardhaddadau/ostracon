import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import {
  LOGIN_HORIZONTAL_PADDING,
  LOGIN_VERTICAL_MARGIN,
  LOGIN_VERTICAL_PADDING,
} from "../../constants/constants";

import { useTheme } from "@ui-kitten/components";

import {
  getRegistrationData,
  saveRegistrationData,
} from "../../utils/AsyncOps";

const SignUpOne = ({ inputEmail, inputPassword }) => {
  // Theme
  const theme = useTheme();

  // States
  const [signUpEmail, setSignUpEmail] = useState(null);
  const [signUpPass, setSignUpPass] = useState(null);

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
            borderColor: theme["color-post-border"],
            color: theme["color-primary-default"],
          },
        ]}
        onChangeText={async (value) => {
          setSignUpPass(value);
          inputPassword = value;

          try {
            let currentData = await getRegistrationData();
            currentData["password"] = value;

            console.log(currentData);
          } catch (e) {
            //
          }
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

    borderRadius: 20,

    shadowOffset: { horizontal: 5, vertical: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 7,
    borderWidth: 0,
  },
});

export default SignUpOne;
