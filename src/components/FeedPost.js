import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const FeedPost = ({ item }) => {
  return (
    <View style={styles.feedWrapper}>
      <View style={styles.feedImage}></View>
      <View style={styles.feedInfo}>
        <Text style={styles.feedUsername}>User: {item["userId"]}</Text>
      </View>
      <View style={styles.feedBody}>
        <View style={styles.LeftInteractions}>
          <TouchableOpacity style={{ borderWidth: 1 }}>
            <MaterialCommunityIcons name="hand-heart" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={{ borderWidth: 1 }}>
            <MaterialCommunityIcons name="hand-heart" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={{ borderWidth: 1 }}>
            <MaterialCommunityIcons name="hand-heart" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => console.log(item["id"])}>
          <View style={styles.feedPost}>
            <Text>User: {item["title"]}</Text>
            <Text>User: {item["body"]}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={{ borderWidth: 1 }}>
          <MaterialCommunityIcons name="hand-heart" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedWrapper: {
    margin: 5,

    borderWidth: 1,

    overflow: "hidden",
  },
  feedInfo: {
    flexDirection: "row",
    alignItems: "flex-end",

    left: 70,
    height: 35,

    fontWeight: "bold",
  },
  feedUsername: {
    fontSize: 16,
    fontWeight: "bold",
  },
  feedImage: {
    position: "absolute",

    left: 0,
    top: 0,

    width: 70,
    height: 70,

    borderWidth: 10,
    borderColor: "white",
    borderRadius: 100,
    backgroundColor: "red",

    zIndex: 5,
  },
  feedTime: {},
  feedBody: {
    flexDirection: "row",

    marginLeft: 40,
    minHeight: 150,

    backgroundColor: "#e3e3e3",
  },
  LeftInteractions: {
    flexDirection: "column",

    marginTop: 40,

    height: 100,

    justifyContent: "space-evenly",
    alignItems: "center",

    width: 40,
  },
  feedPost: {
    flexGrow: 2,

    padding: 5,

    borderRadius: 5,
  },
});

export default FeedPost;
