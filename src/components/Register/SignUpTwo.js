import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";
import {
  LOGIN_HORIZONTAL_PADDING,
  LOGIN_VERTICAL_MARGIN,
  LOGIN_VERTICAL_PADDING,
} from "../../constants/constants";

const SignUpTwo = ({
  signUpHandle,
  setSignUpHandle,
  signUpNickname,
  setSignUpSignUpNickname,
  isValid,
}) => {
  // Theme
  const theme = useTheme();

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
        onChangeText={(value) => setSignUpHandle(value)}
        value={signUpHandle}
        placeholder="Handle"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"default"}
      />
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
        onChangeText={(value) => setSignUpNickname(value)}
        value={signUpNickname}
        placeholder="Nickname"
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

    borderRadius: 100,

    shadowOffset: { horizontal: 5, vertical: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 7,
  },
});

export default SignUpTwo;
