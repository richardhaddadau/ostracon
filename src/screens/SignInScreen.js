import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  Keyboard,
} from "react-native";

// Import Constants
import { LOGIN_FOOTNOTE_SIZE, LOGIN_STANDARD_SIZE } from "../theme/Fonts";
import {
  LOGIN_VERTICAL_PADDING,
  LOGIN_VERTICAL_MARGIN,
  LOGIN_HORIZONTAL_PADDING,
} from "../constants/constants";

// Import Theme Libraries
import { Button, useTheme } from "@ui-kitten/components";

// Import Authentication
import { faunaDriver } from "../utils/Fauna";
import {
  cleanSecureStore,
  getSecureStore,
  setSecureStore,
} from "../utils/AsyncOps";
import SessionContext, {
  SessionContextProvider,
  SessionContextConsumer,
} from "../context/SessionContext";

const SignInScreen = ({ navigation }) => {
  // States
  const [loginUser, setLoginUser] = useState(null);
  const [loginPass, setLoginPass] = useState(null);
  const [isValid, setIsValid] = useState([true, true]);
  const [isSignedIn, setIsSignedIn] = useContext(SessionContext);

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
                top: 20,
                left: -10,

                width: 170,
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
              Please login to your account
            </Text>
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
                setLoginUser(value);
              }}
              value={loginUser}
              placeholder="Username or Email"
              placeholderTextColor={theme["color-primary-200"]}
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
              onChangeText={(value) => setLoginPass(value)}
              value={loginPass}
              placeholder="Password"
              placeholderTextColor={theme["color-primary-200"]}
              keyboardType={"default"}
              secureTextEntry={true}
            />
            <Button
              onPress={async () => {
                const validateArr = [true, true];
                await cleanSecureStore("savedAccount");

                let savedDetails = await getSecureStore("savedAccount");
                console.log(savedDetails);

                validateArr[0] = loginUser !== null && loginUser.length > 0;
                validateArr[1] = loginPass !== null && loginPass.length > 0;

                setIsValid(validateArr);

                if (isValid[0] && isValid[1]) {
                  await faunaDriver.Login(loginUser, loginPass);
                  let savedDetails = await getSecureStore("savedAccount");
                  console.log(savedDetails);

                  if (savedDetails["account"]) {
                    setIsSignedIn(true);
                  }
                }
              }}
              style={{
                marginVertical: LOGIN_VERTICAL_MARGIN,
                borderRadius: 100,
                width: "100%",
                borderColor: theme["base-background"],
                borderWidth: 7,
              }}
            >
              Login
            </Button>

            <View style={{ marginTop: LOGIN_VERTICAL_MARGIN }}>
              <Text
                style={{
                  fontSize: LOGIN_FOOTNOTE_SIZE,
                  color: theme["color-primary-400"],
                }}
              >
                Don't have an account?{" "}
                <TouchableWithoutFeedback
                  onPress={() => {
                    cleanSecureStore("signup");
                    navigation.navigate("Register");
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: theme["color-primary-400"],
                    }}
                  >
                    Sign up
                  </Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
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

    borderRadius: 100,

    shadowOffset: { horizontal: 5, vertical: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 7,
    borderWidth: 0,
  },
});

export default SignInScreen;
