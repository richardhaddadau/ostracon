import React from "react";
import { TouchableOpacity } from "react-native";

import { navigate, currentScreen } from "../navigation/Member/RootNavigation";

// Import Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const screenObj = {
  "New Post": "send",
};

const BigButton = () => {
  return (
    <TouchableOpacity
      style={{
        position: "fixed",

        justifyContent: "center",
        alignItems: "center",

        bottom: 50,
        left: "50%",

        transform: [{ translateX: "-50%" }],

        width: 80,
        height: 80,

        backgroundColor: "#2d2f46",
        borderRadius: 100,
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",

        zIndex: 10,
      }}
      onPress={() => {
        navigate("New Post");
      }}
    >
      <MaterialCommunityIcons
        name={
          screenObj[currentScreen()] === undefined
            ? "pencil-plus"
            : screenObj[currentScreen()]
        }
        size={34}
        color={"white"}
      />
    </TouchableOpacity>
  );
};

export default BigButton;
