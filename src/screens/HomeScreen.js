import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

// Import components
import CustomHeader from "../navigation/CustomHeader";

// Import theme libraries
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FollowersFeed from "./FollowersFeed";

const GlobalFeed = () => <View></View>;

const TopTabs = createMaterialTopTabNavigator();

// Main Component
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader screenName={"Feed"} navigation={navigation} />

      <TopTabs.Navigator>
        <TopTabs.Screen name="My Feed" component={FollowersFeed} />
        <TopTabs.Screen name="Global" component={GlobalFeed} />
      </TopTabs.Navigator>
    </SafeAreaView>
  );
};

export default HomeScreen;
