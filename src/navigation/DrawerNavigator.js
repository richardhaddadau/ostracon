import React from "react";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import BottomTabNavigator from "./BottomTabNavigator";
import { ProfileStackNavigator } from "./StacksNavigator";
import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import NotificationsScreen from "../screens/NotificationsScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="My Feed"
        component={BottomTabNavigator}
        options={{
          drawerIcon: () => <Ionicons name="home-sharp" size={24} />,
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          drawerIcon: () => <Ionicons name="home-sharp" size={24} />,
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="My Profile"
        component={ProfileStackNavigator}
        options={{
          drawerIcon: () => <Ionicons name="person" size={24} />,
        }}
      />
      <Drawer.Screen
        name="Chapters"
        component={ProfileStackNavigator}
        options={{
          drawerIcon: () => <Ionicons name="people-circle-outline" size={24} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
