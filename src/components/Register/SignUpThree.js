import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {
  LOGIN_HORIZONTAL_PADDING,
  LOGIN_VERTICAL_MARGIN,
  LOGIN_VERTICAL_PADDING,
} from "../../constants/constants";
import DatePicker from "react-native-date-picker";
import { useTheme } from "@ui-kitten/components";

const SignUpThree = () => {
  // Theme
  const theme = useTheme();

  // States
  const [openDate, setOpenDate] = useState(false);
  const [signUpDateOfBirth, setSignUpDateOfBirth] = useState(new Date());
  const [signUpDOBText, setSignUpDOBText] = useState(null);

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
        onChangeText={(value) => setSignUpDOBText(value)}
        onPress={() => {
          setOpenDate(true);
        }}
        value={signUpDOBText}
        placeholder="Date of Birth"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"default"}
      />
      <DatePicker
        modal
        open={openDate}
        date={signUpDateOfBirth}
        onConfirm={(date) => {
          setOpenDate(false);
          setSignUpDateOfBirth(date);
          setSignUpDOBText(date);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
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

export default SignUpThree;
