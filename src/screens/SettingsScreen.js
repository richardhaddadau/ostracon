import React, { useState } from "react";

import { SafeAreaView, View, TextInput, ScrollView } from "react-native";

// Import Theme
import { Divider, Toggle, useTheme } from "@ui-kitten/components";

// Import Constants
import { SETTINGS_TITLE_SIZE, SETTINGS_SUBTITLE_SIZE } from "../theme/Fonts";
import ListFooter from "../components/ListFooter";
import {
  SettingsNavigateItem,
  SettingsOptionItem,
  SettingsSectionTitle,
} from "../components/SettingsItems";
import StackHeader from "../navigation/Member/StackHeader";

// Settings Screen Component
const SettingsScreen = ({ navigation }) => {
  // Theme
  const theme = useTheme();

  // States
  const [showDOB, setShowDOB] = useState(false);
  const [makePrivate, setMakePrivate] = useState(false);
  const [allowSensitive, setAllowSensitive] = useState(false);
  const [openDM, setOpenDM] = useState(true);
  const [receiveNotifications, setReceiveNotifications] = useState(true);

  const [pinValue, setPinValue] = useState("");

  return (
    <SafeAreaView>
      <StackHeader
        screenName={"Settings"}
        navigation={navigation}
        close={false}
      />
      <ScrollView
        style={{ padding: 10, backgroundColor: theme["color-bar-surface"] }}
      >
        <SettingsSectionTitle sectionTitle={"Account Settings"} />
        <SettingsNavigateItem
          itemLabel={"Change nickname"}
          itemDescription={"Archer"}
          navigateTo={"Chapters"}
        />
        <SettingsNavigateItem
          itemLabel={"Change handle"}
          itemDescription={"randy"}
          navigateTo={"Chapters"}
        />
        <SettingsNavigateItem
          itemLabel={"Change email address"}
          itemDescription={"sterling@archer.com"}
          navigateTo={"Chapters"}
        />
        <SettingsNavigateItem
          itemLabel={"Change password"}
          navigateTo={"Chapters"}
        />
        <SettingsOptionItem
          itemLabel={"Show date of birth"}
          option={
            <Toggle
              checked={showDOB}
              onChange={(checked) => {
                setShowDOB(checked);
              }}
            />
          }
        />
        <SettingsSectionTitle sectionTitle={"Privacy Settings"} />
        <SettingsOptionItem
          itemLabel={"Secure app with pin"}
          option={
            <TextInput
              value={pinValue}
              onChange={(value) => {
                setPinValue(value);
              }}
              keyboardType={"numeric"}
              secureTextEntry={true}
              maxLength={4}
              style={{
                padding: 3,
                paddingHorizontal: 20,
                width: 80,
                borderRadius: 10,
                backgroundColor: theme["color-primary-100"],
              }}
            />
          }
        />
        <SettingsOptionItem
          itemLabel={"Secure Timeout"}
          itemDescription={"Ostracon will lock when the app is closed for:"}
          option={<View />}
        />
        <SettingsOptionItem
          itemLabel={"Make profile private"}
          option={
            <Toggle
              checked={makePrivate}
              onChange={(checked) => {
                setMakePrivate(checked);
              }}
            />
          }
        />
        <SettingsOptionItem
          itemLabel={"Allow sensitive material"}
          itemDescription={"Allow sensitive material on your feed?"}
          option={
            <Toggle
              checked={allowSensitive}
              onChange={(checked) => {
                setAllowSensitive(checked);
              }}
            />
          }
        />
        <SettingsOptionItem
          itemLabel={"Open Direct Messaging"}
          itemDescription={"Allow mutual followers to message you?"}
          option={
            <Toggle
              checked={openDM}
              onChange={(checked) => {
                setOpenDM(checked);
              }}
            />
          }
        />
        <SettingsSectionTitle sectionTitle={"Notifications"} />
        <SettingsOptionItem
          itemLabel={"Receive Notifications"}
          itemDescription={"Overall control for notifications"}
          option={
            <Toggle
              checked={receiveNotifications}
              onChange={(checked) => {
                setReceiveNotifications(checked);
              }}
            />
          }
        />
        <SettingsNavigateItem
          itemLabel={"Push Notifications"}
          itemDescription={"Settings for notifications on your phone"}
          navigateTo={"Chapters"}
        />
        <SettingsNavigateItem
          itemLabel={"Email Notifications"}
          itemDescription={
            "Settings for notifications send to your email address"
          }
          navigateTo={"Chapters"}
        />
        <ListFooter />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
