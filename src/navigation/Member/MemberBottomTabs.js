import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import screens
import HomeScreen from "../../screens/HomeScreen";
import NotificationsScreen from "../../screens/NotificationsScreen";
import MessagesScreen from "../../screens/MessagesScreen";
import ProfileScreen from "../../screens/ProfileScreen";

// Import Custom Tab Layout
import CustomBottomTabsContent from "./CustomBottomTabsContent";

const Tabs = createBottomTabNavigator();

// Dummy Component for OstraconButton
const DummyComponent = () => {
  return <></>;
};

const MemberBottomTabs = () => {
  return (
    <Tabs.Navigator
      tabBar={(props) => <CustomBottomTabsContent {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Feed" component={HomeScreen} />
      <Tabs.Screen name="OstraconButton" component={DummyComponent} />
      <Tabs.Screen name="Notifications" component={NotificationsScreen} />
      <Tabs.Screen name="Messages" component={MessagesScreen} />
      {/*<Tabs.Screen name="Profile" component={ProfileScreen} />*/}
    </Tabs.Navigator>
  );
};

export default MemberBottomTabs;
