import React from "react";
import { View, ImageBackground, TouchableWithoutFeedback } from "react-native";
import { Text, useTheme } from "@ui-kitten/components";

// Import Constants
import {
  OSTRACON_BUTTON_BOTTOM_GAP,
  OSTRACON_BUTTON_SIZE,
  OSTRACON_ICON_SIZE,
} from "../constants/constants";

// Import Icons
import { Next as NextActive } from "../components/Ostracon-Active";

import { Ring as RingStd } from "../components/Ostracon-Std";

const WelcomeScreen = ({ navigation }) => {
  // Theme
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("../../assets/welcome-screen.jpg")}
        resizeMode={"cover"}
        style={{ flex: 1, height: "100%", justifyContent: "center" }}
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
            navigation.navigate("OnBoardingOneScreen");
          }}
        >
          <View
            style={{
              position: "absolute",
              flexDirection: "row",

              justifyContent: "center",
              alignItems: "center",

              alignSelf: "center",

              bottom: 23,

              width: OSTRACON_BUTTON_SIZE,
              height: OSTRACON_BUTTON_SIZE,

              backgroundColor: "#fff",
              borderRadius: 100,
            }}
          >
            <NextActive size={26} color={"#363744"} />
          </View>
        </TouchableWithoutFeedback>
        <RingStd
          size={30}
          color={"#ffffff"}
          style={{
            position: "absolute",
            alignSelf: "center",
            bottom: 38,
            translateX: 50,
            transform: [{ translateX: 50 }],
          }}
        />
        <RingStd
          size={30}
          color={"#ffffff"}
          style={{
            position: "absolute",
            alignSelf: "center",
            bottom: 38,
            translateX: 75,
            transform: [{ translateX: 75 }],
          }}
        />
        <RingStd
          size={30}
          color={"#ffffff"}
          style={{
            position: "absolute",
            alignSelf: "center",
            bottom: 38,
            translateX: 100,
            transform: [{ translateX: 100 }],
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
