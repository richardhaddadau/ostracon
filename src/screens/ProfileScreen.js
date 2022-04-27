import React, { useEffect, useRef, useState } from "react";
import { Animated, View, Text, StyleSheet, FlatList } from "react-native";

// Import Theme
import { useTheme } from "@ui-kitten/components";

// Import Navigation
import CreateMaterialTopTabNavigator from "@react-navigation/material-top-tabs/src/navigators/createMaterialTopTabNavigator";

// Import Icons
import {
  Person as PersonStd,
  Comment as CommentStd,
  Clap as ClapStd,
  Award as AwardStd,
  Location as LocationStd,
} from "../components/Ostracon-Std";
import {
  Person as PersonActive,
  Comment as CommentActive,
  Clap as ClapActive,
  Award as AwardActive,
  Location as LocationActive,
} from "../components/Ostracon-Active";

import {
  TOP_NAVIGATION_FULL_HEIGHT,
  TOP_NAVIGATION_ICON_SIZE,
} from "../constants/constants";
import ProfileFeedScreen from "./ProfileFeedScreen";
import ProfileRepliesScreen from "./ProfileRepliesScreen";
import ProfileClapsScreen from "./ProfileClapsScreen";
import ProfilePraisesScreen from "./ProfilePraisesScreen";
import ProfileHomeScreen from "./ProfileHomeScreen";
import CustomHeader from "../navigation/Member/CustomHeader";

const Tabs = CreateMaterialTopTabNavigator();
const iconSize = TOP_NAVIGATION_ICON_SIZE;

const ProfileScreen = ({ navigation }) => {
  //Theme
  const theme = useTheme();

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader screenName={"Username"} navigation={navigation} />

      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: {
            justifyContent: "center",
            height: TOP_NAVIGATION_FULL_HEIGHT,
          },
        }}
      >
        <Tabs.Screen
          name="ProfileHome"
          component={ProfileHomeScreen}
          options={{
            lazy: true,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <PersonActive
                  size={iconSize + 3}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <PersonStd
                  size={iconSize + 3}
                  color={theme["color-primary-300"]}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Posts"
          component={ProfileFeedScreen}
          options={{
            lazy: true,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <LocationActive
                  size={iconSize + 3}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <LocationStd
                  size={iconSize + 3}
                  color={theme["color-primary-300"]}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Replies"
          component={ProfileRepliesScreen}
          options={{
            lazy: true,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <CommentActive
                  size={iconSize + 3}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <CommentStd
                  size={iconSize + 3}
                  color={theme["color-primary-300"]}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Applause"
          component={ProfileClapsScreen}
          options={{
            lazy: true,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <ClapActive
                  size={iconSize + 3}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <ClapStd
                  size={iconSize + 3}
                  color={theme["color-primary-300"]}
                />
              );
            },
          }}
        />
      </Tabs.Navigator>
    </View>
  );
};

export default ProfileScreen;
