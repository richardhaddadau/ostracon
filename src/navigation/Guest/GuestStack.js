import React from "react";

// Import Navigation Libraries
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

// Import Screens
import WelcomeScreen from "../../screens/WelcomeScreen";
import SignInScreen from "../../screens/SignInScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import SignOutScreen from "../../screens/SignOutScreen";
import OnBoardingOneScreen from "../../screens/OnBoardingOneScreen";
import OnBoardingTwoScreen from "../../screens/OnBoardingTwoScreen";
import OnBoardingThreeScreen from "../../screens/OnBoardingThreeScreen";
import OnBoardingFourScreen from "../../screens/OnBoardingFourScreen";

const Stack = createStackNavigator();

const GuestStack = ({ setIsSignedIn }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="OnBoardingOneScreen"
        component={OnBoardingOneScreen}
      />
      <Stack.Screen
        name="OnBoardingTwoScreen"
        component={OnBoardingTwoScreen}
      />
      <Stack.Screen
        name="OnBoardingThreeScreen"
        component={OnBoardingThreeScreen}
      />
      <Stack.Screen
        name="OnBoardingFourScreen"
        component={OnBoardingFourScreen}
      />
      <Stack.Screen
        name="Login"
        component={SignInScreen}
        setSigned={setIsSignedIn}
      />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Log Out" component={SignOutScreen} />
    </Stack.Navigator>
  );
};

export default GuestStack;
