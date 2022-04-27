import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DatePicker from "react-native-date-picker";

import { useTheme } from "@ui-kitten/components";

const SignUpScreen = ({ navigation }) => {
  // States
  const [nickname, setSignUpNickname] = useState(null);
  const [signUpHandle, setSignUpHandle] = useState(null);
  const [signUpEmail, setSignUpEmail] = useState(null);
  const [signUpPass, setSignUpPass] = useState(null);
  const [signUpLocation, setSignUpLocation] = useState(null);
  const [signUpDOBText, setSignUpDOBText] = useState(null);
  const [signUpDateOfBirth, setSignUpDateOfBirth] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);

  // Theme
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme["color-primary-default"],
      }}
    >
      <Text>Register</Text>

      <TextInput
        style={[
          styles.InputField,
          { backgroundColor: theme["color-primary-400"] },
        ]}
        onChangeText={(value) => setSignUpEmail(value)}
        value={signUpEmail}
        placeholder="Email"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"email-address"}
      />

      <TextInput
        style={[
          styles.InputField,
          { backgroundColor: theme["color-primary-400"] },
        ]}
        onChangeText={(value) => setSignUpNickname(value)}
        value={nickname}
        placeholder="Nickname"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"default"}
      />

      <TextInput
        style={[
          styles.InputField,
          { backgroundColor: theme["color-primary-400"] },
        ]}
        onChangeText={(value) => setSignUpHandle(value)}
        value={signUpHandle}
        placeholder="Handle"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"default"}
      />

      <TextInput
        style={[
          styles.InputField,
          { backgroundColor: theme["color-primary-400"] },
        ]}
        onChangeText={(value) => setSignUpPass(value)}
        value={signUpPass}
        placeholder="Password"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"default"}
        secureTextEntry={true}
      />

      <TextInput
        style={[
          styles.InputField,
          { backgroundColor: theme["color-primary-400"] },
        ]}
        onChangeText={(value) => setSignUpLocation(value)}
        value={signUpLocation}
        placeholder="Location"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"default"}
      />

      <TextInput
        style={[
          styles.InputField,
          { backgroundColor: theme["color-primary-400"] },
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

      <Button onPress={() => {}} title={"Exit Guest"} />

      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          height: 50,
          width: "100%",
        }}
      >
        <Text style={{ color: "white" }}>Already have an account? </Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
          <Text style={{ fontWeight: "bold", color: "white" }}>Sign in</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  InputField: {
    padding: 10,
    margin: 5,

    width: "80%",

    borderRadius: 10,

    color: "white",

    elevation: 5,
  },
});

export default SignUpScreen;
