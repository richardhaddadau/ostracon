import React from "react";
import { TouchableOpacity, Text } from "react-native";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import BottomTabNavigator from "./BottomTabNavigator";

import { Ionicons } from "@expo/vector-icons";
import { StacksNavigator } from "./StacksNavigator";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = (props) => (
  <DrawerContentScrollView {...props}>
    <TouchableOpacity>
      <DrawerItem label="Something" onPress={() => console.log("Placeholder")}>
        <Ionicons name="people-circle-outline" size={24} />
      </DrawerItem>
    </TouchableOpacity>
  </DrawerContentScrollView>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerItem />}
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
      <Drawer.Screen name="Chapters" component={StacksNavigator} options={{}} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
