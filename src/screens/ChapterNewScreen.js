import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";

// Import Navigation
import CreateHeader from "../navigation/Member/CreateHeader";
import { goBack } from "../navigation/Member/RootNavigation";

// Import Theme
import { Toggle, useTheme } from "@ui-kitten/components";
import {
  HEADER_ICON_SIZE,
  LOGIN_HORIZONTAL_PADDING,
  LOGIN_VERTICAL_MARGIN,
  LOGIN_VERTICAL_PADDING,
  NEW_CHAPTER_MARGIN,
  NEW_CHAPTER_PADDING,
  POST_HORIZONTAL_PADDING,
  POST_VERTICAL_PADDING,
} from "../constants/constants";

import { SettingsOptionItem } from "../components/SettingsItems";

import { Info as InfoActive } from "../components/Ostracon-Active";

const ChapterNewScreen = () => {
  const theme = useTheme();

  // States
  const [chapterName, setChapterName] = useState("");
  const [chapterDescription, setChapterDescription] = useState("");
  const [ageLimit, setAgeLimit] = useState(true);
  // Chapter Emblem??

  return (
    <View>
      <CreateHeader
        headerTitle="New Chapter"
        GoBack={goBack}
        SendButton={true}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ padding: POST_VERTICAL_PADDING }}
      >
        {/* Chapter Name */}
        <TextInput
          style={[
            styles.inputField,
            {
              backgroundColor: theme["color-surface"],
              color: theme["color-primary-default"],

              borderColor: theme["color-danger-400"],
            },
          ]}
          onChangeText={(value) => {
            setChapterName(value);
          }}
          value={chapterName}
          placeholder="Chapter Name"
          placeholderTextColor={theme["color-primary-300"]}
          keyboardType={"default"}
        />

        {/* Chapter Description */}
        <TextInput
          style={[
            styles.inputField,
            {
              backgroundColor: theme["color-surface"],
              color: theme["color-primary-default"],

              borderColor: theme["color-danger-400"],
            },
          ]}
          multiline
          numberOfLines={4}
          keyboardType={"default"}
          onChangeText={(value) => {
            setChapterDescription(value);
          }}
          value={chapterDescription}
          placeholder="Chapter Description..."
          placeholderTextColor={theme["color-primary-300"]}
        />

        {/* Age Limit */}
        <SettingsOptionItem
          itemLabel={"Safe for children?"}
          withPadding={false}
          option={
            <Toggle
              checked={ageLimit}
              onChange={(checked) => {
                setAgeLimit(checked);
              }}
            />
          }
        />
        <Text
          style={{ color: theme["color-primary-400"], fontStyle: "italic" }}
        >
          Warning: Any groups claimed to be safe for children but are found to
          contain any sensitive or explicit content will be removed with no
          warnings.
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    paddingVertical: NEW_CHAPTER_PADDING,
    paddingHorizontal: NEW_CHAPTER_PADDING,
    marginVertical: NEW_CHAPTER_MARGIN,

    width: "100%",

    borderRadius: 10,

    shadowOffset: { horizontal: 2, vertical: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,

    elevation: 3,
  },
});

export default ChapterNewScreen;
