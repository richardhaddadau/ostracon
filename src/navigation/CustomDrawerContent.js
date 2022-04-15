import React, { useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { navigate } from "./RootNavigation";
import { ThemeContext } from "../context/ThemeContext";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

// Import icons
import {
  Bookmark as BookmarkActive,
  Award as AwardActive,
  Moon as MoonActive,
  Settings as SettingsActive,
  Sun as SunActive,
} from "../components/Ostracon-Active";

import { Divider, useTheme } from "@ui-kitten/components";
import { BOTTOM_NAVIGATION_ICON_SIZE } from "../constants/constants";

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
          <BookmarkActive
            size={BOTTOM_NAVIGATION_ICON_SIZE}
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
        label="Points"
        onPress={() => navigate("Chapters")}
        icon={() => (
          <AwardActive
            size={BOTTOM_NAVIGATION_ICON_SIZE}
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
          <SettingsActive
            size={BOTTOM_NAVIGATION_ICON_SIZE}
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
            <MoonActive
              size={20}
              color={
                themeContext.theme === "light"
                  ? theme["color-primary-500"]
                  : theme["color-primary-100"]
              }
              style={{ margin: -2 }}
            />
          ) : (
            <SunActive
              size={24}
              color={
                themeContext.theme === "light"
                  ? theme["color-primary-500"]
                  : theme["color-primary-100"]
              }
              style={{ margin: -2 }}
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
