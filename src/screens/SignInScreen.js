import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "@ui-kitten/components";

const SignInScreen = ({ navigation }) => {
  // States
  const [loginUser, setLoginUser] = useState(null);
  const [loginPass, setLoginPass] = useState(null);

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
      <Text>Login</Text>
      <TextInput
        style={[
          styles.InputField,
          { backgroundColor: theme["color-primary-400"] },
        ]}
        onChangeText={(value) => setLoginUser(value)}
        value={loginUser}
        placeholder="Username or Email"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"email-address"}
      />

      <TextInput
        style={[
          styles.InputField,
          { backgroundColor: theme["color-primary-400"] },
        ]}
        onChangeText={(value) => setLoginPass(value)}
        value={loginPass}
        placeholder="Password"
        placeholderTextColor={theme["color-primary-300"]}
        keyboardType={"default"}
        secureTextEntry={true}
      />
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
        <Text style={{ color: "white" }}>Don't have an account? </Text>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>Sign up</Text>
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

export default SignInScreen;
