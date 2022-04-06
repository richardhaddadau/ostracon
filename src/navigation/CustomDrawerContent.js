import React, { useContext } from "react";
import { navigate } from "./RootNavigation";
import { ThemeContext } from "../context/ThemeContext";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBookBookmark,
  faMedal,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomDrawerContent = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Chapters"
        onPress={() => {
          navigate("Chapters");
        }}
        icon={() => <FontAwesomeIcon icon={faBookBookmark} size={20} />}
        labelStyle={{ marginLeft: -20 }}
      />
      <DrawerItem
        label="Points"
        onPress={() => navigate("Chapters")}
        icon={() => (
          <MaterialCommunityIcons
            name="shield-star"
            size={24}
            style={{ margin: -2 }}
          />
        )}
        labelStyle={{ marginLeft: -20 }}
      />
      <DrawerItem
        label="Settings"
        onPress={() => navigate("Chapters")}
        icon={() => <FontAwesomeIcon icon={faGear} size={20} />}
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
      <DrawerItem
        label="Switch to Dark"
        onPress={themeContext.toggleTheme}
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
