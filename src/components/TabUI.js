import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import TabShape from "./TabShape";

import {
  BOTTOM_NAVIGATION_BAR_HEIGHT,
  BOTTOM_NAVIGATION_BUTTON_SIZE,
  BOTTOM_NAVIGATION_ICON_SIZE,
  OSTRACON_BUTTON_SIZE,
  OSTRACON_BUTTON_SPACE,
  OSTRACON_ICON_SIZE,
} from "../theme/constants";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { navigate } from "../navigation/RootNavigation";

const { width: viewWidth } = Dimensions.get("window");
const barHeight = BOTTOM_NAVIGATION_BAR_HEIGHT;
const buttonSize = BOTTOM_NAVIGATION_BUTTON_SIZE;
const buttonIconSize = BOTTOM_NAVIGATION_ICON_SIZE;
const ostraconSpace = OSTRACON_BUTTON_SPACE;
const ostraconSize = OSTRACON_BUTTON_SIZE;
const ostraconIconSize = OSTRACON_ICON_SIZE;

const tabWidth = (viewWidth - ostraconSpace) / 4;

const TabUI = ({ state, navigation }) => {
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentRoute, setCurrentRoute] = useState("");

  const screenObj = {
    Home: "home",
    Search: "magnify",
    Notifications: "bell",
    Messages: "message-text",
  };

  const variableObj = {
    Default: "pencil-plus",
    Messages: "email-plus-outline",
  };

  return (
    <View style={styles.tabBarLayout}>
      <TabShape {...{ tabWidth }} />

      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        useEffect(() => {
          isFocused ? setCurrentScreen(route.name) : null;
        });

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route["key"],
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route["key"],
          });
        };

        if (index === Math.floor(state.routes.length / 2)) {
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={() => {
                currentScreen === "Messages"
                  ? navigate("New Message")
                  : navigate("New Post");
              }}
              onLongPress={onLongPress}
              key={route["key"]}
              style={styles.ostraconButton}
            >
              <MaterialCommunityIcons
                name={
                  currentScreen === "Messages"
                    ? variableObj["Messages"]
                    : variableObj["Default"]
                }
                size={ostraconIconSize}
                color={"white"}
              />
            </TouchableOpacity>
          );
        }

        return (
          <View key={route["key"]} style={styles.tabItem}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                justifyContent: "center",
                alignItems: "center",

                width: buttonSize,
                height: buttonSize,

                backgroundColor: isFocused ? "#937741" : "#fff",
                borderRadius: 100,

                shadowOffset: { width: 2, height: 5 },
                shadowRadius: 5,
                shadowOpacity: 0.65,
                shadowColor: "black",
                elevation: 2,
              }}
            >
              <MaterialCommunityIcons
                name={screenObj[route.name]}
                size={buttonIconSize}
                color={isFocused ? "#fff" : "#2d2f46"}
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarLayout: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-evenly",
    alignItems: "center",

    height: barHeight,
    width: viewWidth,
  },
  ostraconButton: {
    justifyContent: "center",
    alignItems: "center",

    bottom: 40,
    transform: "translateX(-0.5px)",

    width: ostraconSize,
    height: ostraconSize,

    backgroundColor: "#2d2f46",
    borderRadius: 100,

    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowColor: "black",
    elevation: 2,
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",
    width: (viewWidth - ostraconSpace) / 4,
  },
});

export default TabUI;
