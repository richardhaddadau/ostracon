import React from "react";
import { TouchableOpacity } from "react-native";

// Import Icons
import { Ionicons } from "@expo/vector-icons";

const BigButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{
        position: "fixed",

        justifyContent: "center",
        alignItems: "center",

        bottom: 45,
        left: "50%",

        transform: "translateX(-50%)",

        width: 90,
        height: 90,

        backgroundColor: "#2d2f46",
        borderRadius: 100,
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",

        zIndex: 100,
      }}
    >
      <Ionicons name="pencil" size={34} color={"white"} />
    </TouchableOpacity>
  );
};

export default BigButton;
