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

import { useTheme, Button } from "@ui-kitten/components";
import {
  LOGIN_HORIZONTAL_PADDING,
  LOGIN_VERTICAL_MARGIN,
  LOGIN_VERTICAL_PADDING,
} from "../constants/constants";
import { LOGIN_FOOTNOTE_SIZE, LOGIN_STANDARD_SIZE } from "../theme/Fonts";
import StepperLegend from "../components/Register/StepperLegend";

import SignUpOne from "../components/Register/SignUpOne";
import SignUpTwo from "../components/Register/SignUpTwo";
import SignUpThree from "../components/Register/SignUpThree";
import SignUpFour from "../components/Register/SignUpFour";

// import AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = ({ navigation }) => {
  // States
  const [screenStep, setScreenStep] = useState(1);

  let dataState = false;

  // Theme
  const theme = useTheme();

  // Step Screens
  const screenSteps = [
    <SignUpOne />,
    <SignUpTwo />,
    <SignUpThree />,
    <SignUpFour />,
  ];

  const completeSteps = 4;

  // AsyncStorage Procedures
  const getRegistrationData = async () => {
    const screenSchedule = {
      1: ["email", "password"],
      2: ["handle", "nickname"],
      3: ["dateOfBirth"],
      4: ["location"],
    };

    try {
      const registrationObject = await AsyncStorage.getItem(
        "@current_registration_details"
      );

      console.log(`Step: ${screenStep}`);

      console.log(registrationObject[screenSchedule]);

      console.log(JSON.parse(registrationObject[screenSchedule["1"][0]]));
      return false;
      return registrationObject != null;
    } catch (e) {
      // Error Reading
    }
  };

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
              Register a new account
            </Text>

            <StepperLegend
              currentStep={screenStep}
              totalSteps={completeSteps}
              size={35}
              gapStyle={"dotted"}
              setScreenStep={(value) => setScreenStep(value)}
              currentRegistrationDetails={getRegistrationData()}
            />

            {screenSteps[screenStep - 1]}

            {screenStep < completeSteps ? (
              <Button
                style={{
                  marginVertical: LOGIN_VERTICAL_MARGIN,
                  borderRadius: 100,
                  width: "100%",
                  backgroundColor: theme["color-primary-default"],
                  borderColor: theme["base-background"],
                  borderWidth: 7,
                }}
                onPress={() => {
                  console.log(getRegistrationData());

                  if (getRegistrationData) {
                    setScreenStep(screenStep + 1);
                  }
                }}
              >
                Next
              </Button>
            ) : (
              <Button
                style={{
                  marginVertical: LOGIN_VERTICAL_MARGIN,
                  borderRadius: 100,
                  width: "100%",
                  backgroundColor: theme["color-danger-400"],
                  borderColor: theme["base-background"],
                  borderWidth: 7,
                }}
                onPress={() => {
                  let dataState = getRegistrationData();
                }}
              >
                Register
              </Button>
            )}

            <View style={{ marginTop: LOGIN_VERTICAL_MARGIN }}>
              <Text
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: LOGIN_FOOTNOTE_SIZE,
                  color: theme["color-primary-400"],
                  height: 20,
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

    shadowOffset: { horizontal: 5, vertical: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 7,
    borderWidth: 0,
  },
});

export default SignUpScreen;
