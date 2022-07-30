import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  POST_HORIZONTAL_MARGIN,
  POST_HORIZONTAL_PADDING,
  POST_VERTICAL_MARGIN,
  POST_VERTICAL_PADDING,
} from "../../constants/constants";
import { Avatar, useTheme } from "@ui-kitten/components";
import { NOTIFICATIONS_SAMPLE_SIZE } from "../../constants/Fonts";

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
        {/*{images.map((item, index) => {*/}
        {/*  let currentImage = `../../../assets/fake-data/avatars/${item.name}.jpg`;*/}
        {/*  console.log(`${index}: ${currentImage}`);*/}
        {/*  return (*/}
        {/*    <Avatar*/}
        {/*      key={index}*/}
        {/*      size={"small"}*/}
        {/*      shape={"rounded"}*/}
        {/*      source={currentImage}*/}
        {/*    />*/}
        {/*  );*/}
        {/*})}*/}

        <Avatar
          size={"small"}
          shape={"rounded"}
          source={require("../../../assets/fake-data/avatars/cool-dude.jpg")}
        />

        <Avatar
          style={styles.notificationAvatar}
          size={"small"}
          shape={"rounded"}
          source={require("../../../assets/fake-data/avatars/space-alien.jpg")}
        />

        <Avatar
          style={styles.notificationAvatar}
          size={"small"}
          shape={"rounded"}
          source={require("../../../assets/fake-data/avatars/dangerous-girl.jpg")}
        />

        <Avatar
          style={styles.notificationAvatar}
          size={"small"}
          shape={"rounded"}
          source={require("../../../assets/fake-data/avatars/spider-gwen.jpg")}
        />

        <Avatar
          style={styles.notificationAvatar}
          size={"small"}
          shape={"rounded"}
          source={require("../../../assets/fake-data/avatars/superman.jpg")}
        />

        <Avatar
          style={styles.notificationAvatar}
          size={"small"}
          shape={"rounded"}
          source={require("../../../assets/fake-data/avatars/superman.jpg")}
        />
      </View>

      <View style={styles.notificationBody}>
        <Text>
          <Text style={{ fontWeight: "bold", fontStyle: "italic" }}>
            name, and others
          </Text>{" "}
          praised you.
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
    paddingBottom: POST_VERTICAL_PADDING,

    borderBottomWidth: 0.5,
  },
  notificationBody: { paddingVertical: POST_VERTICAL_PADDING },
  notificationSample: {
    paddingTop: POST_VERTICAL_PADDING,
    fontSize: NOTIFICATIONS_SAMPLE_SIZE,
  },
  notificationAvatar: {
    marginLeft: 5,
    borderWidth: 1,
  },
});

export default NotificationsPraiseReceived;
