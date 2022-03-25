import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabNavigator from "./BottomTabNavigator";
import { ProfileStackNavigator } from "./StacksNavigator";

import { Ionicons } from "@expo/vector-icons";

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
