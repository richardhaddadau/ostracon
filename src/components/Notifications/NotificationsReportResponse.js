import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  POST_HORIZONTAL_MARGIN,
  POST_HORIZONTAL_PADDING,
  POST_VERTICAL_MARGIN,
  POST_VERTICAL_PADDING,
} from "../../constants/constants";
import { useTheme } from "@ui-kitten/components";

const NotificationsReportResponse = ({ message, status }) => {
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
          {
            backgroundColor:
              status === "success"
                ? theme["color-success-300"]
                : theme["color-primary-400"],
          },
        ]}
      >
        <Text style={{ fontWeight: "bold" }}>Response to your report</Text>
      </View>
      <View style={styles.notificationBody}>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationWrapper: {
    marginVertical: POST_VERTICAL_MARGIN,
    marginHorizontal: POST_HORIZONTAL_MARGIN,

    borderRadius: 20,
    borderWidth: 2,

    overflow: "hidden",
  },
  notificationHeader: {
    paddingHorizontal: POST_HORIZONTAL_PADDING,
    paddingVertical: POST_VERTICAL_PADDING,

    flexDirection: "row",
  },
  notificationBody: {
    paddingVertical: POST_VERTICAL_PADDING,
    paddingHorizontal: POST_HORIZONTAL_PADDING,
  },
});

export default NotificationsReportResponse;
