import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import Theme
import { useTheme } from "@ui-kitten/components";

// Import components
import CustomHeader from "../navigation/Member/CustomHeader";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Import Screens
import FeedLocal from "./FeedLocal";
import FeedSearch from "./FeedSearch";

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
import {
  TOP_NAVIGATION_FULL_HEIGHT,
  TOP_NAVIGATION_ICON_SIZE,
} from "../constants/constants";
import FeedGlobal from "./FeedGlobal";
import FeedHot from "./FeedHot";

const TopTabs = createMaterialTopTabNavigator();
const iconSize = TOP_NAVIGATION_ICON_SIZE;

const HomeScreen = ({ navigation }) => {
  // Theme
  const theme = useTheme();

  // States
  const [tabScreen, setTabScreen] = useState("My Feed");

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader screenName={tabScreen} navigation={navigation} />

      <TopTabs.Navigator
        screenOptions={{
          tabBarShowIcon: true,
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            backgroundColor: theme["color-primary-accent"],
          },
          tabBarStyle: {
            justifyContent: "center",
            height: TOP_NAVIGATION_FULL_HEIGHT,
          },
        }}
      >
        <TopTabs.Screen
          name="My Feed"
          options={{
            lazy: true,

            tabBarIcon: ({ focused }) => {
              return focused ? (
                <LocationActive
                  size={iconSize + 3}
                  color={theme["color-primary-accent"]}
                />
              ) : (
                <LocationStd
                  size={iconSize + 3}
                  color={theme["color-primary-accent"]}
                />
              );
            },
            tabBarStyle: {
              backgroundColor: theme["color-bar-surface"],
            },
          }}
        >
          {(props) => (
            <FeedLocal {...props} setScreen={(value) => setTabScreen(value)} />
          )}
        </TopTabs.Screen>
        <TopTabs.Screen
          name="Global"
          options={{
            lazy: true,

            tabBarIcon: ({ focused }) => {
              return focused ? (
                <GlobeActive
                  size={iconSize}
                  color={theme["color-primary-accent"]}
                />
              ) : (
                <GlobeStd
                  size={iconSize}
                  color={theme["color-primary-accent"]}
                />
              );
            },

            tabBarStyle: {
              backgroundColor: theme["color-bar-surface"],
            },
          }}
        >
          {(props) => (
            <FeedGlobal {...props} setScreen={(value) => setTabScreen(value)} />
          )}
        </TopTabs.Screen>
        <TopTabs.Screen
          name="Hot"
          options={{
            lazy: true,

            tabBarIcon: ({ focused }) => {
              return focused ? (
                <FlameActive
                  size={iconSize}
                  color={theme["color-primary-accent"]}
                />
              ) : (
                <FlameStd
                  size={iconSize}
                  color={theme["color-primary-accent"]}
                />
              );
            },

            tabBarStyle: {
              backgroundColor: theme["color-bar-surface"],
            },
          }}
        >
          {(props) => (
            <FeedHot {...props} setScreen={(value) => setTabScreen(value)} />
          )}
        </TopTabs.Screen>
        <TopTabs.Screen
          name="Search"
          options={{
            lazy: true,

            tabBarIcon: ({ focused }) => {
              return focused ? (
                <SearchActive
                  size={iconSize}
                  color={theme["color-primary-accent"]}
                />
              ) : (
                <SearchStd
                  size={iconSize}
                  color={theme["color-primary-accent"]}
                />
              );
            },

            tabBarStyle: {
              backgroundColor: theme["color-bar-surface"],
            },
          }}
        >
          {(props) => (
            <FeedSearch {...props} setScreen={(value) => setTabScreen(value)} />
          )}
        </TopTabs.Screen>
      </TopTabs.Navigator>
    </View>
  );
};

export default HomeScreen;
