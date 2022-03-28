import React from "react";
import { navigate } from "../navigation/RootNavigation";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props, navigation) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Chapters"
        onPress={() => {
          navigate("Chapters");
        }}
      />
      <DrawerItem label="Points" onPress={() => navigate("Chapters")} />
      <DrawerItem label="Settings" onPress={() => navigate("Chapters")} />
      <DrawerItem label="Help & Support" onPress={() => navigate("Chapters")} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
