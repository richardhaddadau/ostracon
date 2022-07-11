import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";

// Import Navigation
import { navigate } from "../navigation/Member/RootNavigation";

// Import Theme
import { Divider, useTheme } from "@ui-kitten/components";
import { SETTINGS_SUBTITLE_SIZE, SETTINGS_TITLE_SIZE } from "../theme/Fonts";

// Settings Items with Navigation
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

// Settings Item with Options
const SettingsOptionItem = ({
  itemLabel,
  itemDescription = "",
  option = null,
  withPadding = true,
}) => {
  // Theme
  const theme = useTheme();

  return (
    <View>
      <View
        style={[
          styles.optionItemWrapper,
          {
            paddingHorizontal: withPadding ? 20 : 0,
          },
        ]}
      >
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

// Setttings Item with Action
const SettingsActionItem = ({
  itemLabel,
  itemDescription = "",
  action,
  param = null,
  status = null,
}) => {
  // Theme
  const theme = useTheme();

  return (
    <View>
      <TouchableWithoutFeedback onPress={(param) => action}>
        <View style={styles.navigateItemWrapper}>
          <Text
            style={[
              styles.itemMainTitle,
              {
                color:
                  status === "danger"
                    ? theme["color-danger-500"]
                    : theme["color-primary-500"],
              },
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

export {
  SettingsOptionItem,
  SettingsSectionTitle,
  SettingsNavigateItem,
  SettingsActionItem,
};
