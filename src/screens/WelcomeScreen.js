import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "@ui-kitten/components";

// Import Constants
import {
  OSTRACON_BUTTON_SIZE,
  OSTRACON_ICON_SIZE,
} from "../constants/constants";

// Import Icons
import { Play as PlayActive } from "../components/Ostracon-Active";
const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Welcome</Text>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",

            paddingLeft: 5,

            top: "25%",

            width: OSTRACON_BUTTON_SIZE,
            height: OSTRACON_BUTTON_SIZE,

            backgroundColor: "black",
            borderRadius: 100,
          }}
        >
          <PlayActive size={OSTRACON_ICON_SIZE} color={"white"} />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
