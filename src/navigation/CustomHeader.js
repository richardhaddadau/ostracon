import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

// Import Icons
import { Ionicons } from "@expo/vector-icons";
import { NotificationsStackNavigator } from "./StacksNavigator";

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

      <View style={styles.headerItem}>
        <Text style={styles.headerText}>{screenName}</Text>
      </View>

      <View style={styles.headerItem}>
        <TouchableOpacity
          style={{
            backgroundColor:
              screenName === "Notifications" ? "#937741" : "#fff",
            justifyContent: "center",
            alignItems: "center",

            width: 45,
            height: 45,

            borderRadius: 100,

            shadowColor: "black",
            shadowOpacity: 0.5,
            shadowOffset: { width: 0, height: 5 },
            shadowRadius: 10,
            elevation: 2,
          }}
          onPress={() => navigation.navigate("Notifications")}
        >
          <Ionicons
            name="notifications"
            size={24}
            color={screenName === "Notifications" ? "#fff" : "#2d2f46"}
          />
        </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  headerButton: {},
});

export default CustomHeader;
