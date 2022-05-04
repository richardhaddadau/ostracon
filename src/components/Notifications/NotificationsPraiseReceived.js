import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  POST_HORIZONTAL_MARGIN,
  POST_HORIZONTAL_PADDING,
  POST_VERTICAL_MARGIN,
  POST_VERTICAL_PADDING,
} from "../../constants/constants";
import { Avatar, useTheme } from "@ui-kitten/components";

const NotificationsPraiseReceived = () => {
  const theme = useTheme();

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
      </View>

      <View style={styles.notificationBody}>
        <Text>
          <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
            name, and others
          </Text>{" "}
          has praised you.
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
    paddingVertical: POST_VERTICAL_PADDING,

    borderRadius: 20,

    borderWidth: 2,
  },
  notificationHeader: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
  },
  notificationBody: { paddingTop: POST_VERTICAL_PADDING },
});

export default NotificationsPraiseReceived;
