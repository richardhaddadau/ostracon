import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  BOTTOM_NAVIGATION_BUTTON_SIZE,
  OSTRACON_BUTTON_SIZE,
} from "../constants/constants";

const TabItems = ({ tabs, tabWidth }) => {
  const {
    params: { screen: routeName },
  } = useRoute();

  const screenObj = {
    Home: "home",
    Search: "magnify",
    "New Post": "pencil-plus",
    Notifications: "bell",
    Messages: "message-text",
  };

  return (
    <View>
      {tabs.map((tab, key) => {
        if (key === Math.floor(tabs.length / 2)) {
          return (
            <TouchableOpacity
              style={[
                styles.ostraconButton,
                {
                  transform: [{ translateX: "-50%" }],
                },
              ]}
              onPress={tab.action}
            >
              <MaterialCommunityIcons
                name={screenObj[routeName]}
                size={OSTRACON_BUTTON_SIZE}
                color={"white"}
              />
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            style={styles.standardBottomBarButton}
            onPress={tab.action}
          >
            <MaterialCommunityIcons
              name={screenObj[tab.route]}
              size={BOTTOM_NAVIGATION_BUTTON_SIZE}
              color={"#2d2f46"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  ostraconButton: {
    position: "fixed",

    justifyContent: "center",
    alignItems: "center",

    bottom: 50,
    left: "50%",

    width: 80,
    height: 80,

    backgroundColor: "#2d2f46",
    borderRadius: 100,

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  standardBottomBarButton: {
    justifyContent: "center",
    alignItems: "center",

    width: 45,
    height: 45,

    backgroundColor: "#2d2f46",
    borderRadius: 100,
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
  },
});

export default TabItems;
