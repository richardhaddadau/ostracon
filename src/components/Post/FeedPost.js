import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Avatar, useTheme } from "@ui-kitten/components";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage, faClone } from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsis as faEllipsisSolid,
  faHandsClapping as faHandsClappingSolid,
  faMessage as faMessageSolid,
  faClone as faCloneSolid,
} from "@fortawesome/free-solid-svg-icons";

// Constants
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
      minute: 60,
      hour: 3600,
      day: 86400,
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
    } else {
      let timeAgoExact = `${
        monthObj[rightNow.getMonth()]
      } ${rightNow.getDay()} `;
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
        { backgroundColor: theme["base-background-5"] },
      ]}
    >
      <View style={styles.feedHeader}>
        <Avatar size="medium" source={item["user"]["image"]} />
        <View style={styles.feedInfo}>
          <Text style={styles.feedUsername}>{item["user"]["id"]}</Text>
          <Text style={styles.feedTime}>posted {postedText}</Text>
        </View>

        <TouchableOpacity style={styles.menuButton}>
          <FontAwesomeIcon
            icon={faEllipsisSolid}
            size={POST_ICON_SIZE}
            color={"#b7b7b7"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.feedBody}>
        <View style={styles.feedPost}>
          <TouchableOpacity onPress={() => console.log(item["id"])}>
            <Text>{item["content"]}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.interactionsBar}>
        <TouchableOpacity style={styles.feedInteractions}>
          <FontAwesomeIcon
            icon={faHandsClappingSolid}
            size={POST_ICON_SIZE}
            color={"#b7b7b7"}
          />
          <Text style={styles.feedBadge}>{item["numberOfApplause"]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feedInteractions}>
          <FontAwesomeIcon
            icon={faClone}
            size={POST_ICON_SIZE}
            color={"#b7b7b7"}
          />

          {/*<FontAwesomeIcon*/}
          {/*  icon={faCloneSolid}*/}
          {/*  size={POST_ICON_SIZE}*/}
          {/*  color={OSTRACON_PRIMARY}*/}
          {/*/>*/}
          <Text style={styles.feedBadge}>{item["numberOfClones"]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feedInteractions}>
          <FontAwesomeIcon
            icon={faMessage}
            size={POST_ICON_SIZE}
            color={"#b7b7b7"}
          />

          {/*<FontAwesomeIcon*/}
          {/*  icon={faMessageSolid}*/}
          {/*  size={POST_ICON_SIZE}*/}
          {/*  color={OSTRACON_PRIMARY}*/}
          {/*/>*/}
          <Text style={styles.feedBadge}>{item["numberOfComments"]}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.feedInteractions}>
          <MaterialCommunityIcons
            name="shield-star-outline"
            size={24}
            color={"#b7b7b7"}
          />

          {/*<MaterialCommunityIcons*/}
          {/*  name="shield-star"*/}
          {/*  size={24}*/}
          {/*  color={OSTRACON_PRIMARY}*/}
          {/*/>*/}
          <Text style={styles.feedBadge}>{item["numberOfPraises"]}</Text>
        </TouchableOpacity>
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
  feedImage: {
    borderRadius: 100,
  },
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
    fontSize: STANDARD_SIZE,
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
