import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import {
  Close as CloseActive,
  Send as SendActive,
} from "../../components/Ostracon-Active";

// Import Constants
import { HEADER_HEIGHT, HEADER_ICON_SIZE } from "../../constants/constants";

import { useTheme } from "@ui-kitten/components";

import { ProcessMentions } from "../../utils/ProcessMentions";
import { faunaDriver } from "../../utils/Fauna";

const CreateHeader = ({
  headerTitle,
  GoBack,
  SendButton = true,
  postText = null,
  postImage = null,
  chapter = null,
}) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.headerWrapper,
        {
          backgroundColor: theme["color-primary-default"],
        },
      ]}
    >
      <View style={styles.headerItem}>
        <TouchableWithoutFeedback
          onPress={() => {
            GoBack();
          }}
        >
          <View>
            <CloseActive size={HEADER_ICON_SIZE} color={"white"} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{headerTitle}</Text>
      </View>

      {SendButton ? (
        <View style={styles.headerItem}>
          <TouchableWithoutFeedback
            onPress={async () => {
              // Create Post Object
              const postObject = {
                author: "",
                content: postText,
                chapter: chapter,
                commentsAllowed: true,
                private: false,
                postApplause: 0,
                postAttaches: 0,
                postComments: 0,
                postHashtags: {},
                created: null,
              };

              // Save Post
              await faunaDriver.CreatePost(postObject);
              GoBack();
            }}
          >
            <View>
              <SendActive size={HEADER_ICON_SIZE} color={"white"} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",

    margin: 0,
    padding: 0,

    width: "100%",
    height: HEADER_HEIGHT,

    justifyContent: "space-between",
    alignItems: "stretch",
  },
  headerItem: {
    justifyContent: "center",
    alignItems: "center",

    width: "15%",
  },
  headerTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",

    flexGrow: 2,
  },
  logoImage: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default CreateHeader;
