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
} from "../Ostracon-Active";

// Import Constants
import {
  POST_USERNAME_BAR,
  POST_ICON_SIZE,
  POST_VERTICAL_PADDING,
  POST_HORIZONTAL_PADDING,
  POST_VERTICAL_MARGIN,
  POST_HORIZONTAL_MARGIN,
  POST_INTERACTIONS_PADDING,
} from "../../constants/constants";

import {
  STANDARD_SIZE,
  FEED_POST_TIME_SIZE,
  FEED_POST_NICKNAME_SIZE,
  FEED_POST_USERNAME_SIZE,
  FEED_POST_MY_APPLAUSE_SIZE,
} from "../../theme/Fonts";

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
  const applauseLimit = 5;

  // Theme
  const theme = useTheme();

  useEffect(() => {
    setPostedText(updateTime);
  });

  return (
    <View
      style={[
        styles.feedWrapper,
        {
          backgroundColor: theme["color-surface"],
          borderColor: theme["color-post-border"],
        },
      ]}
    >
      {/*<View*/}
      {/*  style={[*/}
      {/*    styles.feedHeader,*/}
      {/*    {*/}
      {/*      borderBottomWidth: 0.75,*/}
      {/*      borderBottomColor: theme["color-font-secondary"],*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*>*/}
      {/*  <Avatar*/}
      {/*    style={styles.feedImage}*/}
      {/*    size="large"*/}
      {/*    shape="rounded"*/}
      {/*    source={item["user"]["image"]}*/}
      {/*  />*/}
      {/*  <View style={styles.feedInfo}>*/}
      {/*    <Text*/}
      {/*      style={[*/}
      {/*        styles.feedNickname,*/}
      {/*        { color: theme["color-font-primary"] },*/}
      {/*      ]}*/}
      {/*    >*/}
      {/*      {item["user"]["nickname"]}*/}
      {/*    </Text>*/}
      {/*    <View style={{ flexDirection: "row" }}>*/}
      {/*      <Text*/}
      {/*        style={[*/}
      {/*          styles.feedUsername,*/}
      {/*          { color: theme["color-font-secondary"] },*/}
      {/*        ]}*/}
      {/*      >*/}
      {/*        {`@${item["user"]["username"]} • `}*/}
      {/*      </Text>*/}
      {/*      <Text*/}
      {/*        style={[*/}
      {/*          styles.feedTime,*/}
      {/*          { color: theme["color-font-secondary"] },*/}
      {/*        ]}*/}
      {/*      >*/}
      {/*        posted {postedText}*/}
      {/*      </Text>*/}
      {/*    </View>*/}
      {/*  </View>*/}

      {/*  <TouchableWithoutFeedback*/}
      {/*    onPress={() => {*/}
      {/*      bottomSheetRef.current.snapTo(0);*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <View style={styles.menuButton}>*/}
      {/*      <EllipseStd size={POST_ICON_SIZE} color={"#b7b7b7"} />*/}
      {/*    </View>*/}
      {/*  </TouchableWithoutFeedback>*/}
      {/*</View>*/}

      <View style={styles.feedBody}>
        <View style={styles.feedPost}>
          <TouchableWithoutFeedback onPress={() => console.log(item["id"])}>
            <Text
              style={{
                fontSize: STANDARD_SIZE,
                color: theme["color-font-primary"],
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
                color={theme["color-font-primary"]}
              />
            ) : (
              <ClapStd
                size={POST_ICON_SIZE}
                color={theme["color-font-secondary"]}
              />
            )}
            <Text
              style={[
                styles.feedInteractionCount,
                {
                  color: postApplauseState
                    ? theme["color-font-primary"]
                    : theme["color-font-secondary"],
                },
              ]}
            >
              {postApplause}
            </Text>
            <Text
              style={{
                marginLeft: 5,
                fontSize: FEED_POST_MY_APPLAUSE_SIZE,
                color: theme["color-font-secondary"],
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
                color={theme["color-font-primary"]}
              />
            ) : (
              <AttachStd
                size={POST_ICON_SIZE}
                color={theme["color-font-secondary"]}
              />
            )}
            <Text
              style={[
                styles.feedInteractionCount,
                {
                  color: postAttachState
                    ? theme["color-font-primary"]
                    : theme["color-font-secondary"],
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
                color={theme["color-font-primary"]}
              />
            ) : (
              <CommentStd
                size={POST_ICON_SIZE}
                color={theme["color-font-secondary"]}
              />
            )}
            <Text
              style={[
                styles.feedInteractionCount,
                {
                  color: postCommentState
                    ? theme["color-font-primary"]
                    : theme["color-font-secondary"],
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
                color={theme["color-font-primary"]}
              />
            ) : (
              <AwardStd
                size={POST_ICON_SIZE}
                color={theme["color-font-secondary"]}
              />
            )}
            <Text
              style={[
                styles.feedInteractionCount,
                {
                  color: postPraiseState
                    ? theme["color-font-primary"]
                    : theme["color-font-secondary"],
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
    marginVertical: POST_VERTICAL_MARGIN,
    marginHorizontal: POST_HORIZONTAL_MARGIN,
    paddingHorizontal: POST_HORIZONTAL_PADDING,

    borderRadius: 20,

    borderWidth: 2,
  },
  feedHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",

    paddingVertical: POST_VERTICAL_PADDING,
  },
  feedBody: {
    flex: 1,

    flexDirection: "row",
    alignItems: "flex-start",

    marginVertical: POST_VERTICAL_MARGIN,
    paddingTop: POST_VERTICAL_PADDING,
  },
  feedImage: {},
  feedInfo: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",

    paddingLeft: 10,
  },
  feedNickname: {
    fontWeight: "bold",
    fontSize: FEED_POST_NICKNAME_SIZE,
  },
  feedUsername: {
    fontSize: FEED_POST_USERNAME_SIZE,
  },
  feedTime: {
    fontSize: FEED_POST_TIME_SIZE,
    fontStyle: "italic",
  },
  menuButton: {
    marginRight: POST_HORIZONTAL_MARGIN,

    alignItems: "center",
    justifyContent: "center",

    height: POST_USERNAME_BAR,
  },
  feedPost: {
    flex: 1,
  },
  interactionsBar: {
    flex: 1,
    flexDirection: "row",

    paddingVertical: POST_VERTICAL_PADDING,
    paddingHorizontal: 0,

    justifyContent: "flex-start",
  },
  feedInteractions: {
    flex: 1,
    flexDirection: "row",

    paddingVertical: POST_INTERACTIONS_PADDING,

    justifyContent: "center",
    alignItems: "center",
  },
  feedInteractionCount: {
    marginLeft: POST_INTERACTIONS_PADDING,

    fontSize: STANDARD_SIZE,
  },
});

export default FeedPost;
