import React from "react";
import { navigate } from "../navigation/RootNavigation";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const CustomDrawerContent = (props, navigation) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Chapters"
        onPress={() => {
          navigate("Chapters");
        }}
        icon={() => (
          <MaterialCommunityIcons
            name="book-account-outline"
            size={24}
            color="black"
          />
        )}
        labelStyle={{ marginLeft: -20 }}
      />
      <DrawerItem
        label="Points"
        onPress={() => navigate("Chapters")}
        icon={() => (
          <MaterialCommunityIcons
            name="shield-star-outline"
            size={24}
            color="black"
          />
        )}
        labelStyle={{ marginLeft: -20 }}
      />
      <DrawerItem
        label="Settings"
        onPress={() => navigate("Chapters")}
        icon={() => (
          <MaterialCommunityIcons name="cog-outline" size={24} color="black" />
        )}
        labelStyle={{ marginLeft: -20 }}
      />
      <DrawerItem
        label="Help & Support"
        onPress={() => navigate("Chapters")}
        labelStyle={{
          paddingTop: 15,
          borderTopColor: "#e7e7e7",
          borderTopWidth: 1,
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
