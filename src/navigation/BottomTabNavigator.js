import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import screens
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import MessagesScreen from "../screens/MessagesScreen";

// Import Custom Tab Layout
import TabUI from "./TabUI";
import ProfileScreen from "../screens/ProfileScreen";

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      tabBar={(props) => <TabUI {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      {/*<Tabs.Screen name="Search" component={SearchScreen} />*/}
      <Tabs.Screen name="Notifications" component={NotificationsScreen} />
      <Tabs.Screen name="Variable" component={HomeScreen} />
      <Tabs.Screen name="Messages" component={MessagesScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
