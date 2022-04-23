import React from "react";

// Import Navigation Libraries
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../../screens/WelcomeScreen";
import SignInScreen from "../../screens/SignInScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import SignOutScreen from "../../screens/SignOutScreen";

const Stack = createNativeStackNavigator();

const GuestStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={SignInScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Log Out" component={SignOutScreen} />
    </Stack.Navigator>
  );
};

export default GuestStack;
