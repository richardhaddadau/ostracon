import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "./CustomDrawerContent";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ theme }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
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