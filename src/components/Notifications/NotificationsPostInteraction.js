import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  POST_HORIZONTAL_MARGIN,
  POST_HORIZONTAL_PADDING,
  POST_VERTICAL_MARGIN,
  POST_VERTICAL_PADDING,
} from "../../constants/constants";
import { Avatar, useTheme } from "@ui-kitten/components";
import { NOTIFICATIONS_SAMPLE_SIZE, STANDARD_SIZE } from "../../theme/Fonts";

const NotificationsPostInteraction = () => {
  const theme = useTheme();

  const user = "randy";

  return (
    <View
      style={[
        styles.notificationWrapper,
        {
          backgroundColor: theme["color-surface"],
          borderColor: theme["color-post-border"],
        },
      ]}
    >
      <View
        style={[
          styles.notificationHeader,
          { borderBottomColor: theme["color-font-secondary"] },
        ]}
      >
        <Avatar />
        <Avatar />
        <Avatar />
        <Avatar />
      </View>

      <View style={styles.notificationBody}>
        <Text>
          <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
            name, and others
          </Text>{" "}
          applauded your post
        </Text>
        <Text
          style={[
            styles.notificationSample,
            { color: theme["color-font-secondary"] },
          ]}
        >
          Lorem ipsum is placeholder text commonly used in the graphic...
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationWrapper: {
    marginVertical: POST_VERTICAL_MARGIN,
    marginHorizontal: POST_HORIZONTAL_MARGIN,
    paddingHorizontal: POST_HORIZONTAL_PADDING,
    paddingTop: POST_VERTICAL_PADDING,

    borderRadius: 20,

    borderWidth: 2,
  },
  notificationHeader: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
  },
  notificationBody: { paddingVertical: POST_VERTICAL_PADDING },
  notificationSample: {
    paddingTop: POST_VERTICAL_PADDING,
    fontSize: NOTIFICATIONS_SAMPLE_SIZE,
  },
});

export default NotificationsPostInteraction;
