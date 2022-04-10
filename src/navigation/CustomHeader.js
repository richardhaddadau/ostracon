import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

// Import Icons
import { Ionicons } from "@expo/vector-icons";
import {
  HEADER_BUTTON_SIZE,
  HEADER_HEIGHT,
  HEADER_ICON_SIZE,
} from "../constants/constants";

import { SafeAreaView } from "react-native-safe-area-context";

const CustomHeader = ({ screenName, navigation }) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerItem}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../assets/ostracon-o-logo.png")}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{screenName}</Text>
      </View>

      <View style={styles.headerItem}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",

            width: HEADER_BUTTON_SIZE,
            height: HEADER_BUTTON_SIZE,

            borderRadius: 100,

            shadowColor: "black",
            shadowOpacity: 0.5,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 10,

            elevation: 5,
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Ionicons name="person" size={HEADER_ICON_SIZE} color="#2d2f46" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",

    margin: 0,
    padding: 0,

    width: "100%",
    height: HEADER_HEIGHT,

    backgroundColor: "#2d2f46",

    justifyContent: "space-between",
    alignItems: "stretch",
  },
  headerItem: {
    justifyContent: "center",
    alignItems: "center",

    width: "15%",
  },
  headerTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",

    flexGrow: 2,
  },
  logoImage: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  headerButton: {},
});

export default CustomHeader;
