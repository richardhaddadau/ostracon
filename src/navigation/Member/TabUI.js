import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// Import tab navigator main shape
import TabShape from "./TabShape";

// Import Theme
import { useTheme } from "@ui-kitten/components";

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
} from "../../constants/constants";

// Import icons
import {
  Home as HomeStd,
  Search as SearchStd,
  Bell as BellStd,
  Message as MessageStd,
  NewMessage as NewMessageStd,
  NewPost as NewPostStd,
  Profile as ProfileStd,
} from "../../components/Ostracon-Std";

import {
  Home as HomeActive,
  Search as SearchActive,
  Bell as BellActive,
  Message as MessageActive,
  Profile as ProfileActive,
} from "../../components/Ostracon-Active";

import { navigate } from "./RootNavigation";

const { width: viewWidth } = Dimensions.get("window");
const barHeight = BOTTOM_NAVIGATION_BAR_HEIGHT;
const buttonSize = BOTTOM_NAVIGATION_BUTTON_SIZE;
const ostraconSpace = OSTRACON_BUTTON_SPACE;
const ostraconSize = OSTRACON_BUTTON_SIZE;
const ostraconIconSize = OSTRACON_ICON_SIZE;

const TabUI = ({ state, navigation }) => {
  const theme = useTheme();

  const [currentScreen, setCurrentScreen] = useState("");

  const unfocusedIconsObj = {
    Home: (
      <HomeStd
        size={BOTTOM_NAVIGATION_ICON_SIZE}
        color={theme["color-primary-default"]}
      />
    ),
    Search: (
      <SearchStd
        size={BOTTOM_NAVIGATION_ICON_SIZE}
        color={theme["color-primary-default"]}
      />
    ),
    Notifications: (
      <BellStd
        size={BOTTOM_NAVIGATION_ICON_SIZE}
        color={theme["color-primary-default"]}
      />
    ),
    Messages: (
      <MessageStd
        size={BOTTOM_NAVIGATION_ICON_SIZE}
        color={theme["color-primary-default"]}
      />
    ),
    Profile: (
      <ProfileStd
        size={BOTTOM_NAVIGATION_ICON_SIZE}
        color={theme["color-primary-default"]}
      />
    ),
  };

  const focusedIconsObj = {
    Home: <HomeActive size={BOTTOM_NAVIGATION_ICON_SIZE} color={"white"} />,
    Search: <SearchActive size={BOTTOM_NAVIGATION_ICON_SIZE} color={"white"} />,

    Notifications: (
      <BellActive size={BOTTOM_NAVIGATION_ICON_SIZE} color={"white"} />
    ),
    Messages: (
      <MessageActive size={BOTTOM_NAVIGATION_ICON_SIZE} color={"white"} />
    ),
    Profile: (
      <ProfileActive size={BOTTOM_NAVIGATION_ICON_SIZE} color={"white"} />
    ),
  };

  return (
    <SafeAreaView style={styles.tabBarLayout}>
      <TabShape />

      <View style={styles.tabBarSpread}>
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
                style={[
                  styles.ostraconButton,
                  {
                    backgroundColor: theme["color-primary-default"],
                  },
                ]}
              >
                {currentScreen === "Messages" ? (
                  <NewMessageStd size={ostraconIconSize} color={"white"} />
                ) : (
                  <NewPostStd size={ostraconIconSize} color={"white"} />
                )}
              </TouchableOpacity>
            );
          }

          // For the other standard buttons
          return (
            <View key={route["key"]} style={styles.tabItem}>
              <TouchableWithoutFeedback
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                onPress={onPress}
                onLongPress={onLongPress}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",

                    width: buttonSize,
                    height: buttonSize,

                    backgroundColor: isFocused ? "#937741" : "#fff",
                    borderRadius: 100,

                    shadowOffset: isFocused
                      ? { width: 2, height: 2 }
                      : { width: 0, height: 0 },
                    shadowRadius: isFocused ? 3 : 0,
                    shadowOpacity: isFocused ? 0.25 : 0,
                    shadowColor: "black",

                    elevation: isFocused ? 5 : 0,
                  }}
                >
                  {/* Only show badge for badge buttons*/}
                  {index > 2 ? null : null}

                  {isFocused
                    ? focusedIconsObj[route.name]
                    : unfocusedIconsObj[route.name]}
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabBarLayout: {
    position: "absolute",
    flexDirection: "row",

    margin: 0,
    padding: 0,

    bottom: 0,

    alignItems: "flex-end",

    height: BOTTOM_NAVIGATION_FULL_HEIGHT,
    width: viewWidth,

    elevation: 0,
  },
  tabBarSpread: {
    flexDirection: "row",

    justifyContent: "space-evenly",
    alignItems: "flex-end",

    width: viewWidth,
  },
  ostraconButton: {
    position: "relative",

    justifyContent: "center",
    alignItems: "center",

    bottom: OSTRACON_BUTTON_BOTTOM_GAP,

    width: ostraconSize,
    height: ostraconSize,

    borderRadius: 100,

    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
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
