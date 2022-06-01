import React, { useEffect, useState } from "react";
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
  isValid,
  setIsValid,
}) => {
  // Theme
  const theme = useTheme();

  useEffect(() => {
    setIsValid([true, true]);
  }, []);

  // States
  const [openDate, setOpenDate] = useState(false);

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
          setSignUpDOBText(value);
          value.length > 0 ? (isValid[0] = true) : (isValid[0] = false);
        }}
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
        onConfirm={(value) => {
          setSignUpDateOfBirth(value);
          setSignUpDOBText(
            new Date(value).toLocaleDateString("en-gb", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })
          );
        }}
        onCancel={() => console.log("Cancelled")}
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

export default SignUpThree;
