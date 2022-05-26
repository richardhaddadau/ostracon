import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import {
  LOGIN_HORIZONTAL_PADDING,
  LOGIN_VERTICAL_MARGIN,
  LOGIN_VERTICAL_PADDING,
} from "../../constants/constants";
import { useTheme } from "@ui-kitten/components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";

const SignUpThree = ({
  signUpDOBText,
  setSignUpDOBText,
  signUpDateOfBirth,
  setSignUpDateOfBirth,
}) => {
  // Theme
  const theme = useTheme();

  // States
  const [openDate, setOpenDate] = useState(false);

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
        onFocus={() => {
          setOpenDate(true);
          console.log("Clicked");
        }}
        value={signUpDOBText}
        placeholder="Date of Birth"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"default"}
      />
      <DateTimePicker
        isVisible={openDate}
        mode={"date"}
        onConfirm={(value) => console.log(value)}
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
