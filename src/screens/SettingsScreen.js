import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";

import { navigate } from "../navigation/Member/RootNavigation";

// Import Theme
import { Divider, Toggle, useTheme } from "@ui-kitten/components";

// Import Constants
import { SETTINGS_TITLE_SIZE, SETTINGS_SUBTITLE_SIZE } from "../theme/Fonts";
import ListFooter from "../components/ListFooter";

// Settings Navigate Item
const SettingsNavigateItem = ({
  itemLabel,
  itemDescription = "",
  navigateTo,
}) => {
  // Theme
  const theme = useTheme();

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => navigate(navigateTo)}>
        <View style={styles.navigateItemWrapper}>
          <Text
            style={[
              styles.itemMainTitle,
              { color: theme["color-primary-500"] },
            ]}
          >
            {itemLabel}
          </Text>
          {itemDescription === "" ? null : (
            <Text
              style={[
                styles.itemSubtitle,
                { color: theme["color-primary-400"] },
              ]}
            >
              {itemDescription}
            </Text>
          )}
        </View>
      </TouchableWithoutFeedback>
      <Divider />
    </View>
  );
};

// Settings Option Item
const SettingsOptionItem = ({
  itemLabel,
  itemDescription = "",
  option = null,
}) => {
  // Theme
  const theme = useTheme();

  return (
    <View>
      <View style={styles.optionItemWrapper}>
        <View>
          <Text
            style={[
              styles.itemMainTitle,
              { color: theme["color-primary-500"] },
            ]}
          >
            {itemLabel}
          </Text>
          {itemDescription === "" ? null : (
            <Text
              style={[
                styles.itemSubtitle,
                { color: theme["color-primary-400"] },
              ]}
            >
              {itemDescription}
            </Text>
          )}
        </View>
        <View>{option}</View>
      </View>
      <Divider />
    </View>
  );
};

// Settings Section Title
const SettingsSectionTitle = ({ sectionTitle }) => {
  // Theme
  const theme = useTheme();

  return (
    <View>
      <Text
        style={[styles.sectionTitle, { color: theme["color-primary-500"] }]}
      >
        {sectionTitle}
      </Text>
    </View>
  );
};

// Settings Screen Component
const SettingsScreen = () => {
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
    <ScrollView
      style={{ padding: 10, backgroundColor: theme["bottom-bar-surface"] }}
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
  );
};

const styles = StyleSheet.create({
  navigateItemWrapper: {
    justifyContent: "center",

    paddingVertical: 10,
    paddingHorizontal: 20,

    width: "100%",
  },
  optionItemWrapper: {
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 15,
    paddingHorizontal: 20,

    width: "100%",
  },
  itemMainTitle: {
    fontSize: SETTINGS_TITLE_SIZE,
  },
  itemSubtitle: {
    fontSize: SETTINGS_SUBTITLE_SIZE,
  },
  sectionTitle: {
    paddingTop: 20,
    fontSize: SETTINGS_SUBTITLE_SIZE,
    fontWeight: "700",
    textTransform: "uppercase",
  },
});

export default SettingsScreen;
