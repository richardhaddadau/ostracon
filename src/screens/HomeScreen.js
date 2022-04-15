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

      <TopTabs.Navigator>
        <TopTabs.Screen
          name="My Feed"
          component={FollowersFeed}
          screenOptions={{ lazy: true }}
        />
        <TopTabs.Screen
          name="Global"
          component={GlobalFeed}
          screenOptions={{ lazy: true }}
        />
        <TopTabs.Screen
          name="Search"
          component={SearchFeed}
          screenOptions={{ lazy: true }}
        />
      </TopTabs.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
