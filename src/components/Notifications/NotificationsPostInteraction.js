import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  POST_HORIZONTAL_MARGIN,
  POST_HORIZONTAL_PADDING,
  POST_VERTICAL_MARGIN,
  POST_VERTICAL_PADDING,
} from "../../constants/constants";
import { useTheme } from "@ui-kitten/components";

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
      <Text>{user} applauded your post</Text>
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

export default NotificationsPostInteraction;
