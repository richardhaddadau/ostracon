import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";

import { Avatar, useTheme } from "@ui-kitten/components";

// Import Icons
import {
  Attach as AttachStd,
  Award as AwardStd,
  Clap as ClapStd,
  Comment as CommentStd,
  Ellipse as EllipseStd,
} from "../Ostracon-Std";

import {
  Attach as AttachActive,
  Award as AwardActive,
  Clap as ClapActive,
  Comment as CommentActive,
  Ellipse as EllipseActive,
} from "../Ostracon-Active";

// Import Constants
import {
  POST_USERNAME_BAR,
  POST_MARGIN,
  POST_PADDING,
  POST_ICON_SIZE,
} from "../../constants/constants";

import {
  FEED_POST_TIME_SIZE,
  FEED_POST_USERNAME_SIZE,
  STANDARD_SIZE,
} from "../../theme/Fonts";

import { OSTRACON_PLACEHOLDER } from "../../theme/Colours";

const FeedPost = ({ item }) => {
  useEffect(() => {
    const createdAt = new Date(item["createdAt"]);
    const rightNow = new Date();

    const timeDiff = (rightNow - createdAt) / 1000;
    let timeAgo;

    const timeObj = {
      minute: 60, // 60 Seconds
      hour: 3600, // 60 Seconds x 60 Minutes
      day: 86400, // 60 Seconds x 60 Minutes x 24 Hours
      year: 31536000, // 60 Seconds x 60 Minutes x 24 Hours x 365 Days
    };

    const monthObj = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };

    if (timeDiff < timeObj.minute) {
      let timeAgoInSeconds = Math.floor(timeDiff);
      timeAgo =
        timeAgoInSeconds === 1
          ? `${timeAgoInSeconds} second ago`
          : `${timeAgoInSeconds} seconds ago`;
    } else if (timeDiff < timeObj.hour) {
      let timeAgoInMinutes = Math.floor(timeDiff / 60);
      timeAgo =
        timeAgoInMinutes === 1
          ? `${timeAgoInMinutes} minute ago`
          : `${timeAgoInMinutes} minutes ago`;
    } else if (timeDiff < timeObj.day) {
      let timeAgoInHours = Math.floor(timeDiff / 3600);
      timeAgo =
        timeAgoInHours === 1
          ? `${timeAgoInHours} hour ago`
          : `${timeAgoInHours} hours ago`;
    } else if (timeDiff < timeObj.year) {
      let timeAgoExact = `${createdAt.getDate()} ${
        monthObj[createdAt.getMonth()]
      }`;
      timeAgo = timeAgoExact;
    } else {
      let timeAgoExact = `${createdAt.getDate()} ${
        monthObj[createdAt.getMonth()]
      } ${createdAt.getFullYear().toString().substring(2)}`;
      timeAgo = timeAgoExact;
    }

    setPostedText(timeAgo);
  });

  const [postedText, setPostedText] = useState("");
  const theme = useTheme();

  return (
    <View
      style={[
        styles.feedWrapper,
        { backgroundColor: theme["base-background"] },
      ]}
    >
      <View style={styles.feedHeader}>
        <Avatar
          size="medium"
          shape="rounded"
          source={item["user"]["image"]}
          style={styles.feedImage}
        />
        <View style={styles.feedInfo}>
          <Text style={styles.feedUsername}>
            {item["user"]["name"]} • {item["user"]["username"]}
          </Text>
          <Text style={styles.feedTime}>posted {postedText}</Text>
        </View>

        <TouchableWithoutFeedback>
          <View style={styles.menuButton}>
            <EllipseStd size={POST_ICON_SIZE} color={"#b7b7b7"} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.feedBody}>
        <View style={styles.feedPost}>
          <TouchableWithoutFeedback onPress={() => console.log(item["id"])}>
            <Text style={{ fontSize: STANDARD_SIZE }}>{item["content"]}</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={styles.interactionsBar}>
        <TouchableWithoutFeedback>
          <View style={styles.feedInteractions}>
            <ClapStd size={POST_ICON_SIZE} color={"#b7b7b7"} />
            <Text style={styles.feedBadge}>{item["numberOfApplause"]}</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={styles.feedInteractions}>
            <AttachStd size={POST_ICON_SIZE} color={"#b7b7b7"} />
            <Text style={styles.feedBadge}>{item["numberOfClones"]}</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={styles.feedInteractions}>
            <CommentStd size={POST_ICON_SIZE} color={"#b7b7b7"} />
            <Text style={styles.feedBadge}>{item["numberOfComments"]}</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <View style={styles.feedInteractions}>
            <AwardStd size={24} color={"#b7b7b7"} />
            <Text style={styles.feedBadge}>{item["numberOfPraises"]}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedWrapper: {
    flex: 1,
    margin: POST_MARGIN,
    padding: POST_PADDING,
  },
  feedHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
  },
  feedBody: {
    flex: 1,

    flexDirection: "row",

    alignItems: "flex-start",
  },
  feedImage: {},
  feedInfo: {
    flexGrow: 1,
    flexDirection: "column",

    paddingLeft: 10,
    justifyContent: "center",
  },
  feedUsername: {
    fontWeight: "bold",
    fontSize: FEED_POST_USERNAME_SIZE,
  },
  feedTime: {
    fontSize: FEED_POST_TIME_SIZE,
    color: "#777",
    fontStyle: "italic",
  },
  menuButton: {
    marginRight: POST_MARGIN,

    alignItems: "center",
    justifyContent: "center",

    height: POST_USERNAME_BAR,
  },
  feedPost: {
    flex: 1,

    paddingBottom: POST_MARGIN,
    marginVertical: POST_MARGIN,
  },
  interactionsBar: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,

    justifyContent: "flex-start",
  },
  feedInteractions: {
    flex: 1,
    flexDirection: "row",

    paddingVertical: POST_PADDING,

    justifyContent: "center",
    alignItems: "center",
  },
  feedBadge: {
    marginLeft: POST_PADDING,

    fontSize: 14,
    color: OSTRACON_PLACEHOLDER,
  },
});

export default FeedPost;
