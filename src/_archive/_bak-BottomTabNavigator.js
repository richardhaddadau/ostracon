import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import FeedSearch from "../screens/FeedSearch";
import MessagesScreen from "../screens/MessagesScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import PostNewScreen from "../screens/PostNewScreen";

// Import Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BarGap = () => (
  <TouchableOpacity style={{ width: "20%", opacity: 0 }}>
    <View style={{ width: 1 }}>
      <Text> </Text>
    </View>
  </TouchableOpacity>
);

const iconColour = {
  unFocused: "#2d2f46",
  focused: "#fff",
  bigButton: "#fff",
};

const iconBackgroundColour = {
  unFocused: "#fff",
  focused: "#937741",
  bigButton: "#2d2f46",
};

const iconSize = 24;

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",

          bottom: 0,
          left: 0,
          right: 0,

          height: 90,

          elevation: 0,

          backgroundColor: "#2d2f46",

          WebkitMaskImage:
            "radial-gradient(circle 60px at 50% 0%, transparent 50px, white 51px)",
          overflow: "hidden",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedStyle : styles.unFocusedStyle}>
              <MaterialCommunityIcons
                name="home"
                size={iconSize}
                color={
                  focused ? iconColour["focused"] : iconColour["unFocused"]
                }
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Tab Search"
        component={FeedSearch}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedStyle : styles.unFocusedStyle}>
              <MaterialCommunityIcons
                name="magnify"
                size={iconSize}
                color={
                  focused ? iconColour["focused"] : iconColour["unFocused"]
                }
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Tab New Post"
        component={PostNewScreen}
        options={{
          tabBarButton: () => <BarGap />,
        }}
      />

      <Tab.Screen
        name="Tab Profile"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedStyle : styles.unFocusedStyle}>
              <MaterialCommunityIcons
                name="bell"
                size={iconSize}
                color={
                  focused ? iconColour["focused"] : iconColour["unFocused"]
                }
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Tab Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedStyle : styles.unFocusedStyle}>
              <MaterialCommunityIcons
                name="message-text"
                size={iconSize}
                color={
                  focused ? iconColour["focused"] : iconColour["unFocused"]
                }
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  focusedStyle: {
    justifyContent: "center",
    alignItems: "center",

    width: 45,
    height: 45,

    backgroundColor: iconBackgroundColour["focused"],
    borderRadius: 100,

    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 2,
  },
  unFocusedStyle: {
    justifyContent: "center",
    alignItems: "center",

    width: 45,
    height: 45,

    backgroundColor: iconBackgroundColour["unFocused"],
    borderRadius: 100,

    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 2,
  },
});

export default BottomTabNavigator;
