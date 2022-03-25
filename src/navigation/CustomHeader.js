import React from "react";
import { View, Image, Text, StyleSheet, useRoute } from "react-native";

// Import Icons
import { Ionicons } from "@expo/vector-icons";
import DrawerNav from "./DrawerNav";

const CustomHeader = ({ screenName, navigation }) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerItem}>
        <Image
          source={require("../../assets/ostracon-o-logo.png")}
          resizeMode="contain"
          onPress={() => navigation.openDrawer()}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.headerItem}>
        <Text style={styles.headerText}>{screenName}</Text>
      </View>

      <View style={styles.headerItem}>
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
  headerItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  logoImage: {
    width: 50,
    height: 50,
  },
  headerText: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#fff",
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
