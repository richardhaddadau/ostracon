import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Screens
import {
  HomeStackNavigator,
  SearchStackNavigator,
  MessagesStackNavigator,
  ProfileStackNavigator,
  PostStackNavigator,
} from "./StacksNavigator";

// Import Icons
import { Ionicons } from "@expo/vector-icons";
import DrawerNavigator from "./DrawerNavigator";

const Tab = createBottomTabNavigator();

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
  // RETURN STATEMENT
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
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
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
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
        name="Search"
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
        name="New Post"
        component={PostStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? {
                      justifyContent: "center",
                      alignItems: "center",

                      width: 70,
                      height: 70,

                      backgroundColor: iconBackgroundColour["focused"],
                      borderRadius: 100,
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                    }
                  : {
                      justifyContent: "center",
                      alignItems: "center",

                      bottom: 45,

                      width: 70,
                      height: 70,

                      // backgroundColor: iconBackgroundColour['bigButton'],
                      backgroundColor: "red",
                      borderRadius: 100,
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                    }
              }
            >
              <Ionicons
                name="pencil"
                size={34}
                color={iconColour["bigButton"]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Messages"
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
        name="Profile"
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
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
  },
  unFocusedStyle: {
    justifyContent: "center",
    alignItems: "center",

    width: 45,
    height: 45,

    backgroundColor: iconBackgroundColour["unFocused"],
    borderRadius: 100,
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
  },
});

export default BottomTabNavigator;
