import React, { useState, useContext, useEffect } from "react";

// Import Native Components
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

// Import Theme
import { Divider, Toggle, useTheme } from "@ui-kitten/components";

// Import Custom Components
import {
  SettingsActionItem,
  SettingsNavigateItem,
  SettingsOptionItem,
  SettingsSectionTitle,
} from "../components/SettingsItems";
import StackHeader from "../navigation/Member/StackHeader";
import ListFooter from "../components/ListFooter";

// Import Fauna
import { faunaDriver } from "../utils/Fauna";
import SessionContext from "../context/SessionContext";
import { getSecureStore } from "../utils/AsyncOps";
import { ostraconDriver } from "../utils/Ostracon";

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
  const [isSignedIn, setIsSignedIn] = useContext(SessionContext);

  const [pinValue, setPinValue] = useState("");

  useEffect(async () => {
    let settingsObject = await getSecureStore("savedSettings");

    if (!settingsObject) {
      await ostraconDriver.InitiateSettings;
      settingsObject = await getSecureStore("savedSettings");
    }

    setShowDOB(settingsObject["showDOB"]);
    setPinValue(settingsObject["securePin"]);
    setAllowSensitive(settingsObject["allowSensitive"]);
    setOpenDM(settingsObject["openDM"]);
    setReceiveNotifications(settingsObject["receiveNotifications"]);
  }, []);

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
        {/* ACCOUNT */}
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
              onChange={async (checked) => {
                await ostraconDriver.ChangeSettings("showDOB", checked);
                setShowDOB(checked);
              }}
            />
          }
        />

        {/* APP PRIVACY */}
        <SettingsSectionTitle sectionTitle={"Privacy Settings"} />
        <SettingsOptionItem
          itemLabel={"Secure app with pin"}
          itemDescription={"An empty pin will turn Ostracon lock off"}
          option={
            <TextInput
              value={pinValue}
              onChangeText={async (value) => {
                setPinValue(value);
              }}
              onEndEditing={async () => {
                await ostraconDriver.ChangeSettings(
                  "secureApp",
                  pinValue.length > 0
                );
                await ostraconDriver.ChangeSettings("securePin", pinValue);
              }}
              keyboardType={"numeric"}
              secureTextEntry={true}
              maxLength={6}
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
              onChange={async (checked) => {
                await ostraconDriver.ChangeSettings("openDM", checked);
                setOpenDM(checked);
              }}
            />
          }
        />

        {/* APP NOTIFICATIONS */}
        <SettingsSectionTitle sectionTitle={"Notifications"} />
        <SettingsOptionItem
          itemLabel={"Receive Notifications"}
          itemDescription={"Overall control for notifications"}
          option={
            <Toggle
              checked={receiveNotifications}
              onChange={async (checked) => {
                await ostraconDriver.ChangeSettings(
                  "receiveNotifications",
                  checked
                );
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

        <SettingsSectionTitle sectionTitle={"Session"} />
        <SettingsActionItem
          itemLabel={"Current User"}
          itemDescription={"Temporary Only"}
          process={() => faunaDriver.GetCurrentUser()}
        />
        <SettingsActionItem
          itemLabel={"Logout"}
          itemDescription={"Logout from account"}
          process={() => {
            faunaDriver.Logout().then((res) => console.log(res));
            setIsSignedIn(false);
          }}
          status={"danger"}
        />
        <SettingsActionItem
          itemLabel={"Delete Account"}
          itemDescription={"Completely remove account"}
          process={() => {
            faunaDriver.GetUsers();
          }}
          status={"danger"}
        />

        <SettingsActionItem
          itemLabel={"Temporary Action"}
          itemDescription={"Get Posts"}
          process={() => {
            faunaDriver.GetPosts();
          }}
        />

        <ListFooter />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
