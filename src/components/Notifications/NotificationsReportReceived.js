import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  POST_HORIZONTAL_MARGIN,
  POST_HORIZONTAL_PADDING,
  POST_VERTICAL_MARGIN,
  POST_VERTICAL_PADDING,
} from "../../constants/constants";

import { useTheme } from "@ui-kitten/components";

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
      <Text>We have received your report.</Text>
      <Text>Thank you for making Ostracon a better, safer place.</Text>
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
});

export default NotificationsReportReceived;
