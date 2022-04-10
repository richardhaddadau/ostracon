import React, { useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
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
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { Divider, useTheme } from "@ui-kitten/components";

const CustomDrawerContent = (props) => {
  const themeContext = useContext(ThemeContext);

  const theme = useTheme();

  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor:
          themeContext.theme === "light"
            ? theme["color-base-background"]
            : theme["color-primary-default"],
      }}
    >
      <DrawerItemList {...props} />
      <DrawerItem
        label="Chapters"
        onPress={() => {
          navigate("Chapters");
        }}
        icon={() => (
          <FontAwesomeIcon
            icon={faBookBookmark}
            size={20}
            color={
              themeContext.theme === "light"
                ? theme["color-primary-500"]
                : theme["color-primary-100"]
            }
          />
        )}
        labelStyle={{
          marginLeft: -20,
          color:
            themeContext.theme === "light"
              ? theme["color-primary-500"]
              : theme["color-primary-100"],
        }}
      />
      <DrawerItem
        label="Points"
        onPress={() => navigate("Chapters")}
        icon={() => (
          <MaterialCommunityIcons
            name="shield-star"
            size={24}
            color={
              themeContext.theme === "light"
                ? theme["color-primary-500"]
                : theme["color-primary-100"]
            }
            style={{ margin: -2 }}
          />
        )}
        labelStyle={{
          marginLeft: -20,
          color:
            themeContext.theme === "light"
              ? theme["color-primary-500"]
              : theme["color-primary-100"],
        }}
      />
      <DrawerItem
        label="Settings"
        onPress={() => navigate("Chapters")}
        icon={() => (
          <FontAwesomeIcon
            icon={faGear}
            size={20}
            color={
              themeContext.theme === "light"
                ? theme["color-primary-500"]
                : theme["color-primary-100"]
            }
          />
        )}
        labelStyle={{
          marginLeft: -20,
          color:
            themeContext.theme === "light"
              ? theme["color-primary-500"]
              : theme["color-primary-100"],
        }}
      />
      <Divider />
      <DrawerItem
        label="Help & Support"
        onPress={() => navigate("Chapters")}
        labelStyle={{
          color:
            themeContext.theme === "light"
              ? theme["color-primary-500"]
              : theme["color-primary-100"],
        }}
      />
      <Divider />
      <DrawerItem
        label={
          themeContext.theme === "light" ? "Switch to Dark" : "Switch to Light"
        }
        onPress={themeContext.toggleTheme}
        icon={() =>
          themeContext.theme === "light" ? (
            <Feather
              name="moon"
              size={20}
              color={
                themeContext.theme === "light"
                  ? theme["color-primary-500"]
                  : theme["color-primary-100"]
              }
            />
          ) : (
            <Feather
              name="sun"
              size={24}
              color={
                themeContext.theme === "light"
                  ? theme["color-primary-500"]
                  : theme["color-primary-100"]
              }
            />
          )
        }
        labelStyle={{
          marginLeft: -20,
          color:
            themeContext.theme === "light"
              ? theme["color-primary-500"]
              : theme["color-primary-100"],
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
