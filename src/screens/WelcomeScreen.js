import React from "react";
import { View, ImageBackground, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, useTheme } from "@ui-kitten/components";

// Import Constants
import {
  OSTRACON_BUTTON_SIZE,
  OSTRACON_ICON_SIZE,
} from "../constants/constants";

// Import Icons
import { Play as PlayActive } from "../components/Ostracon-Active";

const WelcomeScreen = ({ navigation }) => {
  // Theme
  const theme = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("../../assets/welcome-screen.jpg")}
        resizeMode={"cover"}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Text style={{ marginLeft: 50, color: "#fff" }} category={"h4"}>
          Welcome to
        </Text>

        <Text
          style={{
            marginLeft: 50,
            marginTop: -10,
            fontWeight: "700",
            color: "#fff",
          }}
          category={"h1"}
        >
          Ostracon
        </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <View
            style={{
              position: "absolute",
              flexDirection: "row",

              justifyContent: "center",
              alignItems: "center",

              alignSelf: "center",

              paddingLeft: 5,

              bottom: 40,

              width: OSTRACON_BUTTON_SIZE,
              height: OSTRACON_BUTTON_SIZE,

              backgroundColor: "#fff",
              borderRadius: 100,
            }}
          >
            <PlayActive size={26} color={"#363744"} />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
