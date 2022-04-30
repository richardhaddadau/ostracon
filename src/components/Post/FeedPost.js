import React, { useEffect, useRef, useState } from "react";
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
  FEED_POST_MY_APPLAUSE_SIZE,
  STANDARD_SIZE,
} from "../../theme/Fonts";

import { OSTRACON_PLACEHOLDER } from "../../theme/Colours";

const FeedPost = ({ item, bottomSheetRef }) => {
  const updateTime = () => {
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

    return timeAgo;
  };

  // States
  const [postedText, setPostedText] = useState("");
  const [postApplause, setPostApplause] = useState(item["numberOfApplause"]);
  const [postAttach, setPostAttach] = useState(item["numberOfAttaches"]);
  const [postComment, setPostComment] = useState(item["numberOfComments"]);
  const [postPraise, setPostPraise] = useState(item["numberOfPraises"]);

  const [postApplauseState, setPostApplauseState] = useState(false);
  const [postAttachState, setPostAttachState] = useState(false);
  const [postCommentState, setPostCommentState] = useState(false);
  const [postPraiseState, setPostPraiseState] = useState(false);

  const [applauseUsed, setApplauseUsed] = useState(0);
  const applauseLimit = 10;

  // Theme
  const theme = useTheme();

  useEffect(() => {
    setPostedText(updateTime);
  });

  return (
    <View
      style={[
        styles.feedWrapper,
        { backgroundColor: theme["base-background"] },
      ]}
    >
      <View style={styles.feedHeader}>
        <Avatar
          style={styles.feedImage}
          size="medium"
          shape="rounded"
          source={item["user"]["image"]}
        />
        <View style={styles.feedInfo}>
          <Text style={styles.feedUsername}>
            {item["user"]["name"]} • {item["user"]["username"]}
          </Text>
          <Text style={styles.feedTime}>posted {postedText}</Text>
        </View>

        <TouchableWithoutFeedback
          onPress={() => {
            bottomSheetRef.current.snapTo(0);
          }}
        >
          <View style={styles.menuButton}>
            <EllipseStd size={POST_ICON_SIZE} color={"#b7b7b7"} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.feedBody}>
        <View style={styles.feedPost}>
          <TouchableWithoutFeedback onPress={() => console.log(item["id"])}>
            <Text
              style={{
                fontSize: STANDARD_SIZE,
                color: theme["color-primary-500"],
              }}
            >
              {item["content"]}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={styles.interactionsBar}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (applauseLimit - applauseUsed > 0) {
              setPostApplauseState(true);
              setPostApplause(postApplause + 1);
              setApplauseUsed(applauseUsed + 1);
            }
          }}
          onLongPress={() => {
            if (postApplauseState) {
              setPostApplauseState(false);
              setPostApplause(postApplause - applauseUsed);
              setApplauseUsed(0);
            }
          }}
        >
          <View style={styles.feedInteractions}>
            {postApplauseState ? (
              <ClapActive
                size={POST_ICON_SIZE}
                color={theme["color-primary-default"]}
              />
            ) : (
              <ClapStd size={POST_ICON_SIZE} color={"#b7b7b7"} />
            )}
            <Text
              style={[
                styles.feedInteractionCount,
                {
                  color: postApplauseState
                    ? theme["color-primary-default"]
                    : OSTRACON_PLACEHOLDER,
                },
              ]}
            >
              {postApplause}
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: FEED_POST_MY_APPLAUSE_SIZE,
                color: OSTRACON_PLACEHOLDER,
              }}
            >
              {applauseUsed > 0 ? `(${applauseUsed})` : null}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            if (postAttachState) {
              setPostAttach(postAttach - 1);
            } else {
              setPostAttach(postAttach + 1);
            }

            setPostAttachState(!postAttachState);
          }}
        >
          <View style={styles.feedInteractions}>
            {postAttachState ? (
              <AttachActive
                size={POST_ICON_SIZE}
                color={theme["color-primary-default"]}
              />
            ) : (
              <AttachStd size={POST_ICON_SIZE} color={"#b7b7b7"} />
            )}
            <Text
              style={[
                styles.feedInteractionCount,
                {
                  color: postAttachState
                    ? theme["color-primary-default"]
                    : OSTRACON_PLACEHOLDER,
                },
              ]}
            >
              {postAttach}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            if (postCommentState) {
              setPostComment(postComment - 1);
            } else {
              setPostComment(postComment + 1);
            }

            setPostCommentState(!postCommentState);
          }}
        >
          <View style={styles.feedInteractions}>
            {postCommentState ? (
              <CommentActive
                size={POST_ICON_SIZE}
                color={theme["color-primary-default"]}
              />
            ) : (
              <CommentStd size={POST_ICON_SIZE} color={"#b7b7b7"} />
            )}
            <Text
              style={[
                styles.feedInteractionCount,
                {
                  color: postCommentState
                    ? theme["color-primary-default"]
                    : OSTRACON_PLACEHOLDER,
                },
              ]}
            >
              {postComment}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            if (postPraiseState) {
              setPostPraise(postPraise - 1);
            } else {
              setPostPraise(postPraise + 1);
            }

            setPostPraiseState(!postPraiseState);
          }}
        >
          <View style={styles.feedInteractions}>
            {postPraiseState ? (
              <AwardActive
                size={POST_ICON_SIZE}
                color={theme["color-primary-default"]}
              />
            ) : (
              <AwardStd size={POST_ICON_SIZE} color={"#b7b7b7"} />
            )}
            <Text
              style={[
                styles.feedInteractionCount,
                {
                  color: postPraiseState
                    ? theme["color-primary-default"]
                    : OSTRACON_PLACEHOLDER,
                },
              ]}
            >
              {postPraise}
            </Text>
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
  feedInteractionCount: {
    marginLeft: POST_PADDING,

    fontSize: STANDARD_SIZE,
  },
});

export default FeedPost;
