import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeStackNavigator,
  SearchStackNavigator,
  MessagesStackNavigator,
  ProfileStackNavigator,
  PostStackNavigator,
} from "./StacksNavigator";

// Import Icons
import { Ionicons } from "@expo/vector-icons";

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
      initialRouteName="Tab Home"
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
            "radial-gradient(circle 70px at 50% 0%, transparent 60px, white 61px)",
          overflow: "hidden",
        },
      }}
    >
      <Tab.Screen
        name="Tab Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedStyle : styles.unFocusedStyle}>
              <Ionicons
                name="home-sharp"
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
        component={SearchStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedStyle : styles.unFocusedStyle}>
              <Ionicons
                name="search"
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
        component={PostStackNavigator}
        options={{
          tabBarButton: () => <BarGap />,
        }}
      />

      <Tab.Screen
        name="Tab Messages"
        component={MessagesStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedStyle : styles.unFocusedStyle}>
              <Ionicons
                name="chatbox-ellipses-sharp"
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
        name="Tab Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focusedStyle : styles.unFocusedStyle}>
              <Ionicons
                name="person"
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
