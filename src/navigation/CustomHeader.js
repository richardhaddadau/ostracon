import React from "react";
import { View, Image, StyleSheet } from "react-native";

// Import Icons
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      <View></View>

      <Image></Image>

      <View style={styles.buttonWrapper}>
        <View style={styles.headerButton}>
          <Ionicons name="notifications" size={24} color="#2d2f46" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",

    width: "100%",
    height: 90,

    backgroundColor: "#2d2f46",

    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  headerButton: {
    justifyContent: "center",
    alignItems: "center",

    width: 45,
    height: 45,

    backgroundColor: "#fff",
    borderRadius: 100,
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
  },
});

export default CustomHeader;
