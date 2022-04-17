import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import Theme
import { useTheme } from "@ui-kitten/components";

// Import components
import CustomHeader from "../navigation/CustomHeader";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Import Screens
import FollowersFeed from "./FollowersFeed";
import SearchFeed from "./SearchFeed";

// Import Icons
import {
  Globe as GlobeStd,
  Search as SearchStd,
  Flame as FlameStd,
  Location as LocationStd,
} from "../components/Ostracon-Std";
import {
  Globe as GlobeActive,
  Search as SearchActive,
  Flame as FlameActive,
  Location as LocationActive,
} from "../components/Ostracon-Active";

// Import Constants
import { POST_ICON_SIZE } from "../constants/constants";

const GlobalFeed = ({ navigation }) => {
  return <View></View>;
};

const TopTabs = createMaterialTopTabNavigator();

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader screenName={"My Feed"} navigation={navigation} />

      <TopTabs.Navigator
        screenOptions={{
          tabBarShowIcon: true,
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            backgroundColor: theme["color-primary-default"],
          },
          tabBarStyle: {
            height: 40,
          },
        }}
      >
        <TopTabs.Screen
          name="My Feed"
          component={FollowersFeed}
          options={{
            lazy: true,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <LocationActive
                  size={POST_ICON_SIZE}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <LocationStd
                  size={POST_ICON_SIZE}
                  color={theme["color-primary-300"]}
                />
              );
            },
          }}
        />
        <TopTabs.Screen
          name="Global"
          component={GlobalFeed}
          options={{
            lazy: true,

            tabBarIcon: ({ focused }) => {
              return focused ? (
                <GlobeActive
                  size={POST_ICON_SIZE}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <GlobeStd
                  size={POST_ICON_SIZE}
                  color={theme["color-primary-300"]}
                />
              );
            },
          }}
        />
        <TopTabs.Screen
          name="Hot"
          component={SearchFeed}
          options={{
            lazy: true,

            tabBarIcon: ({ focused }) => {
              return focused ? (
                <FlameActive
                  size={POST_ICON_SIZE}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <FlameStd
                  size={POST_ICON_SIZE}
                  color={theme["color-primary-300"]}
                />
              );
            },
          }}
        />
        <TopTabs.Screen
          name="Search"
          component={SearchFeed}
          options={{
            lazy: true,

            tabBarIcon: ({ focused }) => {
              return focused ? (
                <SearchActive
                  size={POST_ICON_SIZE}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <SearchStd
                  size={POST_ICON_SIZE}
                  color={theme["color-primary-300"]}
                />
              );
            },
          }}
        />
      </TopTabs.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
