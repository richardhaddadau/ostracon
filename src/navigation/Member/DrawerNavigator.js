import "react-native-gesture-handler/src/web/GestureHandler";
import React from "react";
import { Platform, Dimensions } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "./CustomDrawerContent";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();
const { width: viewWidth } = Dimensions.get("screen");

const DrawerNavigator = ({ theme }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: Platform.OS === "android" ? "front" : "slide",
        swipeEdgeWidth: viewWidth * 0.25,
      }}
    >
      <Drawer.Screen
        name="My Feed"
        component={BottomTabNavigator}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
