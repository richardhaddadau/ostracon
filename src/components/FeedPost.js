import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

import {
  faBolt,
  faHandsClapping,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

// Constants
import {
  POST_IMAGE_SIZE,
  POST_USERNAME_BAR,
  POST_MARGIN,
  POST_MIN_HEIGHT,
  POST_PADDING,
  POST_ICON_SIZE,
} from "../theme/constants";

const FeedPost = ({ item }) => {
  return (
    <View style={styles.feedWrapper}>
      <View style={styles.feedHeader}>
        <View style={styles.feedImage}></View>
        <View style={styles.feedInfo}>
          <Text style={styles.feedUsername}>User: {item["userId"]}</Text>
          <Text style={styles.feedTime}>5 hr</Text>
        </View>
        <TouchableOpacity style={styles.praiseButton}>
          <FontAwesomeIcon
            icon={faBolt}
            size={POST_ICON_SIZE}
            color={"#b7b7b7"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.feedBody}>
        <View style={styles.leftInteractions}>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faHandsClapping}
              size={POST_ICON_SIZE}
              color={"#b7b7b7"}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faMessage}
              size={POST_ICON_SIZE}
              color={"#b7b7b7"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.feedPost}>
          <TouchableOpacity onPress={() => console.log(item["id"])}>
            <Text>User: {item["title"]}</Text>
            <Text>User: {item["body"]}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedWrapper: {
    margin: POST_MARGIN,
    padding: POST_PADDING,
  },
  feedHeader: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  feedBody: {
    flex: 1,

    flexDirection: "row",

    alignItems: "flex-start",

    minHeight: POST_MIN_HEIGHT,
  },
  feedImage: {
    width: POST_IMAGE_SIZE,
    height: POST_IMAGE_SIZE,

    borderRadius: 100,

    borderColor: "red",
    borderWidth: 1,
  },
  feedInfo: {
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "flex-start",

    flexGrow: 1,
  },
  feedUsername: {
    fontWeight: "bold",
    marginRight: 10,
  },
  feedTime: { fontSize: 12, color: "#777" },
  praiseButton: {
    alignItems: "center",
    justifyContent: "center",
    height: POST_USERNAME_BAR,
  },
  leftInteractions: {
    flexDirection: "column",

    paddingTop: 20,
    paddingBottom: 20,

    justifyContent: "space-between",
    alignItems: "center",

    height: 115,

    width: POST_IMAGE_SIZE,
    alignSelf: "flex-start",
  },
  feedPost: {
    width:
      Dimensions.get("screen").width -
      (POST_IMAGE_SIZE + 2 * POST_PADDING + 2 * POST_MARGIN),
  },
});

export default FeedPost;
