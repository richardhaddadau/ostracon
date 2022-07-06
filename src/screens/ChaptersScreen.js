import React from "react";
import { View, Text, SafeAreaView } from "react-native";

import { useTheme } from "@ui-kitten/components";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ChaptersMain from "./ChaptersMain";
import ChapterSearch from "./ChapterSearch";

// Import icons
import {
  Bookmark as BookmarkStd,
  Search as SearchStd,
} from "../components/Ostracon-Std";

import {
  Bookmark as BookmarkActive,
  Search as SearchActive,
} from "../components/Ostracon-Active";

import { TOP_NAVIGATION_ICON_SIZE } from "../constants/constants";
import StackHeader from "../navigation/Member/StackHeader";

const Tab = createMaterialTopTabNavigator();

const ChaptersScreen = ({ navigation }) => {
  // Theme
  const theme = useTheme();
  const iconSize = TOP_NAVIGATION_ICON_SIZE;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackHeader screenName={"Chapters"} navigation={navigation} />
      <Tab.Navigator>
        <Tab.Screen
          name={"List"}
          component={ChaptersMain}
          options={{
            lazy: true,
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
              backgroundColor: theme["color-primary-default"],
            },
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <BookmarkActive
                  size={iconSize + 3}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <BookmarkStd
                  size={iconSize + 3}
                  color={theme["color-primary-300"]}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={"Search"}
          component={ChapterSearch}
          options={{
            lazy: true,
            tabBarShowLabel: false,
            tabBarIndicatorStyle: {
              backgroundColor: theme["color-primary-default"],
            },
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <SearchActive
                  size={iconSize + 3}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <SearchStd
                  size={iconSize + 3}
                  color={theme["color-primary-300"]}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default ChaptersScreen;
