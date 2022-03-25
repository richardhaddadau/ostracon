import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import ChaptersScreen from "../screens/ChaptersScreen";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Chapters" component={ChaptersScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
