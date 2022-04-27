import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, SectionList, FlatList } from "react-native";
import { useTheme } from "@ui-kitten/components";

import ProfileHeader from "../components/Profile/ProfileHeader";
import posts from "../data/posts";
import FeedPost from "../components/Post/FeedPost";

import CreateMaterialTopTabNavigator from "@react-navigation/material-top-tabs/src/navigators/createMaterialTopTabNavigator";
import { TOP_NAVIGATION_FULL_HEIGHT } from "../constants/constants";
import ListFooter from "../components/ListFooter";

const Tabs = CreateMaterialTopTabNavigator();

const ProfileFeed = () => {
  return (
    <View style={{ backgroundColor: "red" }}>
      {posts.map((item, index) => (
        <Text key={index}>{item["user"]["name"]}</Text>
      ))}
    </View>
  );
};

const PraisesFeed = () => {
  return (
    <View style={{ height: 50 }}>
      <Text>{posts[0]["user"]["name"]}</Text>
    </View>
  );
};

const ProfileScreen = ({ navigation }) => {
  // States
  const [feedData, setFeedData] = useState({});

  useEffect(() => {
    setFeedData(posts);
  }, [navigation]);

  // Refs
  const bottomSheetRef = useRef(null);
  const ref = useRef(null);

  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 50 }}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  //Theme
  const theme = useTheme();

  const DATA = [
    {
      id: "n1",
      title: "item 1",
    },
    {
      id: "n2",
      title: "item 2",
    },
    {
      id: "n3",
      title: "item 3",
    },
    {
      id: "n4",
      title: "item 4",
    },

    {
      id: "n5",
      title: "item 5",
    },

    {
      id: "n6",
      title: "item 6",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ backgroundColor: "red" }}
        data={DATA}
        renderItem={renderItem}
        ListHeaderComponent={ProfileHeader}
        ListFooterComponent={ListFooter}
      />
    </View>
  );
};

export default ProfileScreen;
