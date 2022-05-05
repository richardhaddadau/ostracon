import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DatePicker from "react-native-date-picker";

import { useTheme, Button } from "@ui-kitten/components";
import {
  LOGIN_HORIZONTAL_PADDING,
  LOGIN_VERTICAL_MARGIN,
  LOGIN_VERTICAL_PADDING,
} from "../constants/constants";
import { LOGIN_FOOTNOTE_SIZE, LOGIN_STANDARD_SIZE } from "../theme/Fonts";

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../../assets/login-screen.jpg")}
          resizeMode={"cover"}
          style={{ flex: 1 }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-start",

              paddingLeft: 30,
              paddingRight: 50,
            }}
          >
            <Image
              source={require("../../assets/Ostracon-Logo.png")}
              style={{
                width: 180,
                height: 100,

                resizeMode: "contain",
              }}
            />
            <Text
              style={{
                marginBottom: 20,
                fontSize: LOGIN_STANDARD_SIZE,
                color: theme["color-primary-default"],
              }}
            >
              Register a new account
            </Text>
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
              onChangeText={(value) => setSignUpNickname(value)}
              value={nickname}
              placeholder="Nickname"
              placeholderTextColor={theme["color-primary-300"]}
              keyboardType={"default"}
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
                  borderColor: theme["color-post-border"],
                  color: theme["color-primary-default"],
                },
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

            <Button
              style={{
                marginVertical: LOGIN_VERTICAL_MARGIN,
                borderRadius: 100,
                width: "100%",
                borderColor: theme["base-background"],
                borderWidth: 7,
              }}
            >
              Register
            </Button>
            <Text
              style={{
                paddingTop: LOGIN_VERTICAL_PADDING,
                fontSize: LOGIN_FOOTNOTE_SIZE,
                color: theme["color-primary-400"],
              }}
            >
              Already have an account?{" "}
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Login")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: theme["color-primary-400"],
                  }}
                >
                  Login
                </Text>
              </TouchableWithoutFeedback>
            </Text>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputField: {
    paddingVertical: LOGIN_VERTICAL_PADDING,
    paddingHorizontal: LOGIN_HORIZONTAL_PADDING,
    marginVertical: LOGIN_VERTICAL_MARGIN,

    width: "100%",

    borderRadius: 20,

    elevation: 7,
    borderWidth: 0,
  },
});

export default SignUpScreen;
