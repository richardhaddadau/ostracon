import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import Screens
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import PostNewScreen from "../screens/PostNewScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";

// Import Icons
import { Ionicons } from "@expo/vector-icons";
import DrawerNav from "./DrawerNav";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
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
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? {
                      justifyContent: "center",
                      alignItems: "center",

                      width: 45,
                      height: 45,

                      backgroundColor: iconBackgroundColour["focused"],
                      borderRadius: 100,
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                    }
                  : {
                      justifyContent: "center",
                      alignItems: "center",

                      width: 45,
                      height: 45,

                      backgroundColor: iconBackgroundColour["unFocused"],
                      borderRadius: 100,
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                    }
              }
            >
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
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? {
                      justifyContent: "center",
                      alignItems: "center",

                      width: 45,
                      height: 45,

                      backgroundColor: iconBackgroundColour["focused"],
                      borderRadius: 100,
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                    }
                  : {
                      justifyContent: "center",
                      alignItems: "center",

                      width: 45,
                      height: 45,

                      backgroundColor: iconBackgroundColour["unFocused"],
                      borderRadius: 100,
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                    }
              }
            >
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
        component={PostNewScreen}
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
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? {
                      justifyContent: "center",
                      alignItems: "center",

                      width: 45,
                      height: 45,

                      backgroundColor: iconBackgroundColour["focused"],
                      borderRadius: 100,
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                    }
                  : {
                      justifyContent: "center",
                      alignItems: "center",

                      width: 45,
                      height: 45,

                      backgroundColor: iconBackgroundColour["unFocused"],
                      borderRadius: 100,
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                    }
              }
            >
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
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={
                focused
                  ? {
                      justifyContent: "center",
                      alignItems: "center",

                      width: 45,
                      height: 45,

                      backgroundColor: iconBackgroundColour["focused"],
                      borderRadius: 100,
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                    }
                  : {
                      justifyContent: "center",
                      alignItems: "center",

                      width: 45,
                      height: 45,

                      backgroundColor: iconBackgroundColour["unFocused"],
                      borderRadius: 100,
                      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                    }
              }
            >
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

const styles = StyleSheet.create({});

export default BottomTabs;
