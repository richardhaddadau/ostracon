import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import screens
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import MessagesScreen from "../screens/MessagesScreen";

import TabUI from "../components/TabUI";

const Tabs = createBottomTabNavigator();
const tabs = [
  { name: "Home" },
  { name: "Search" },
  { name: "New Post" },
  { name: "Notifications" },
  { name: "Messages" },
];

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
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Variable" component={HomeScreen} />
      <Tabs.Screen name="Notifications" component={NotificationsScreen} />
      <Tabs.Screen name="Messages" component={MessagesScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
