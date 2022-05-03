import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  POST_HORIZONTAL_MARGIN,
  POST_HORIZONTAL_PADDING,
  POST_VERTICAL_MARGIN,
  POST_VERTICAL_PADDING,
} from "../../constants/constants";

import { useTheme } from "@ui-kitten/components";
import NotificationsReportResponse from "./NotificationsReportResponse";
import { Flame } from "../Ostracon-Active";

const NotificationsReportReceived = () => {
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
          { backgroundColor: theme["color-info-400"] },
        ]}
      >
        <Text style={{ fontWeight: "bold" }}>We have received your report</Text>
      </View>
      <View style={styles.notificationBody}>
        <Text>Thank you for making Ostracon a better, safer place.</Text>
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

export default NotificationsReportReceived;
