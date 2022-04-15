import React, { lazy } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, Layout, Tab, TabView, Text } from "@ui-kitten/components";

// Import components
import CustomHeader from "../navigation/CustomHeader";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// Import Screens
import FollowersFeed from "./FollowersFeed";
import SearchFeed from "./SearchFeed";

const GlobalFeed = () => <View></View>;

const TopTabs = createMaterialTopTabNavigator();

// Main Component
const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader screenName={"Feed"} navigation={navigation} />

      <TopTabs.Navigator
        screenOptions={{
          tabBarShowIcon: true,
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 12,
            textTransform: "capitalize",
          },
        }}
      >
        <TopTabs.Screen
          name="My Feed"
          component={FollowersFeed}
          options={{ lazy: true, tabBarShowLabel: false, tabBarIcon: () => {} }}
        />
        <TopTabs.Screen
          name="Global"
          component={GlobalFeed}
          options={{ lazy: true }}
        />
        <TopTabs.Screen
          name="Search"
          component={SearchFeed}
          options={{ lazy: true }}
        />
      </TopTabs.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
