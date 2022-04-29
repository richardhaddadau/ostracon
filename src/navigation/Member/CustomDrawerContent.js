import React, { useContext } from "react";
import { Platform, View } from "react-native";
import { navigate } from "./RootNavigation";
import { ThemeContext } from "../../context/ThemeContext";

import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

// Import icons
import {
  Bookmark as BookmarkActive,
  Award as AwardActive,
  Moon as MoonActive,
  Settings as SettingsActive,
  Sun as SunActive,
} from "../../components/Ostracon-Active";

import {
  Bookmark as BookmarkStd,
  Award as AwardStd,
  Moon as MoonStd,
  Settings as SettingsStd,
  Sun as SunStd,
  Ostracon,
} from "../../components/Ostracon-Std";

import { Divider, useTheme } from "@ui-kitten/components";

// Import Constants
import { DRAWER_NAVIGATION_ICON_SIZE } from "../../constants/constants";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomDrawerContent = ({ props, navigation }) => {
  const themeContext = useContext(ThemeContext);
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          themeContext.theme === "light"
            ? theme["color-base-background"]
            : theme["color-primary-default"],
      }}
    >
      <DrawerContentScrollView
        {...props}
        style={{ flex: 1, marginTop: Platform.OS === "ios" ? -30 : 0 }}
      >
        <DrawerItem
          label="Chapters"
          onPress={() => {
            navigate("Chapters");
          }}
          icon={() => (
            <BookmarkStd
              size={DRAWER_NAVIGATION_ICON_SIZE}
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
          onPress={() => navigate("ChaptersStack")}
          icon={() => (
            <AwardStd
              size={DRAWER_NAVIGATION_ICON_SIZE}
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
          label="Ostracon Gold"
          onPress={() => navigate("Chapters")}
          icon={() => (
            <Ostracon
              size={DRAWER_NAVIGATION_ICON_SIZE}
              color={"#937741"}
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
          onPress={() => navigate("Settings")}
          icon={() => (
            <SettingsStd
              size={DRAWER_NAVIGATION_ICON_SIZE}
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
      </DrawerContentScrollView>

      <SafeAreaView
        style={{
          position: "absolute",

          width: "100%",

          bottom: 0,
        }}
      >
        <DrawerItem
          label="Switch to an Existing Account"
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
            themeContext.theme === "light"
              ? "Switch to Dark Mode"
              : "Switch to Light Mode"
          }
          onPress={themeContext.toggleTheme}
          icon={() =>
            themeContext.theme === "light" ? (
              <MoonStd
                size={DRAWER_NAVIGATION_ICON_SIZE}
                color={
                  themeContext.theme === "light"
                    ? theme["color-primary-500"]
                    : theme["color-primary-100"]
                }
                style={{ margin: -2 }}
              />
            ) : (
              <SunStd
                size={DRAWER_NAVIGATION_ICON_SIZE}
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
      </SafeAreaView>
    </View>
  );
};

export default CustomDrawerContent;
