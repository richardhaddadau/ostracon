import "react-native-gesture-handler/src/web/GestureHandler";
import React from "react";
import { Platform, Dimensions } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "./CustomDrawerContent";
import MemberBottomTabs from "./MemberBottomTabs";
import SettingsScreen from "../../screens/SettingsScreen";
import ChaptersScreen from "../../screens/ChaptersScreen";

const Drawer = createDrawerNavigator();
const { width: viewWidth } = Dimensions.get("screen");

const MemberDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} navigation />}
      screenOptions={{
        headerShown: false,
        drawerType: Platform.OS === "android" ? "front" : "slide",
        swipeEdgeWidth: viewWidth * 0.25,
      }}
    >
      <Drawer.Screen
        name="My Feed"
        component={MemberBottomTabs}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
};

export default MemberDrawer;
