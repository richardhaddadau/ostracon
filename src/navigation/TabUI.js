import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Badge, DefaultTheme } from "react-native-paper";

// Import tab navigator main shape
import TabShape from "./TabShape";

// Import constants
import {
  BOTTOM_NAVIGATION_BAR_HEIGHT,
  BOTTOM_NAVIGATION_BUTTON_SIZE,
  BOTTOM_NAVIGATION_FULL_HEIGHT,
  BOTTOM_NAVIGATION_ICON_SIZE,
  OSTRACON_BUTTON_BOTTOM_GAP,
  OSTRACON_BUTTON_SIZE,
  OSTRACON_BUTTON_SPACE,
  OSTRACON_ICON_SIZE,
} from "../constants/constants";

// Import icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouse as faHouseSolid,
  faMagnifyingGlass as faMagnifyingGlassSolid,
  faBell as faBellSolid,
  faEnvelope as faEnvelopeSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { navigate } from "./RootNavigation";
import {
  OSTRACON_ACCENT,
  OSTRACON_BADGE,
  OSTRACON_PRIMARY,
} from "../theme/Colours";

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

  const focusedIconsObj = {
    Home: "home",
    Search: "magnify",
    Notifications: "bell",
    Messages: "message-text",
  };

  const unfocusedIconsObj = {
    Home: "home",
    Search: "magnify",
    Notifications: "bell",
    Messages: "message-text",
  };

  const variableObj = {
    Default: "pencil-plus",
    Messages: "email-plus-outline",
  };

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: OSTRACON_PRIMARY,
      accent: OSTRACON_ACCENT,
      notification: OSTRACON_BADGE,
    },
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

        // In the case of the middle Ostracon Button
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

        // For the other standard buttons
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
                elevation: 5,
              }}
            >
              {/* Only show badge for badge buttons*/}
              {index > 2 ? (
                <Badge theme={theme} style={styles.tabBadge}>
                  99+
                </Badge>
              ) : null}

              <MaterialCommunityIcons
                name={focusedIconsObj[route.name]}
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
    position: "absolute",
    flexDirection: "row",

    margin: 0,
    padding: 0,

    bottom: 0,

    justifyContent: "space-evenly",
    alignItems: "flex-end",

    height: BOTTOM_NAVIGATION_FULL_HEIGHT,
    width: viewWidth,

    backgroundColor: "transparent",
    borderWidth: 0,

    elevation: 0,
  },
  ostraconButton: {
    position: "relative",

    justifyContent: "center",
    alignItems: "center",

    bottom: OSTRACON_BUTTON_BOTTOM_GAP,

    width: ostraconSize,
    height: ostraconSize,

    backgroundColor: "#2d2f46",
    borderRadius: 100,

    shadowOffset: { width: 2, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.8,
    shadowColor: "black",

    elevation: 5,
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",

    width: (viewWidth - ostraconSpace) / 4,
    height: barHeight,
  },
  tabBadge: {
    position: "absolute",

    top: -5,
    right: -15,

    elevation: 5,
    zIndex: 5,
  },
});

export default TabUI;
