import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

import CustomHeader from "../navigation/CustomHeader";
import FeedPost from "../components/Post/FeedPost";
import { SafeAreaView } from "react-native-safe-area-context";
import PostSeparator from "../components/Post/PostSeparator";
import posts from "../data/posts";
import { BOTTOM_NAVIGATION_FULL_HEIGHT } from "../constants/constants";
import PostFooter from "../components/Post/PostFooter";

const HomeScreen = ({ navigation }) => {
  const [feedData, setFeedData] = useState({});

  useEffect(() => {
    //   axios("https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => response.data)
    //     .then((actualData) => setFeedData(actualData));
    setFeedData(posts);
  });

  const renderItem = ({ item }) => {
    return <FeedPost item={item} />;
  };

  return (
    <SafeAreaView>
      <CustomHeader screenName={"Feed"} navigation={navigation} />
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item["id"]}
        ItemSeparatorComponent={PostSeparator}
        ListFooterComponent={PostFooter}
        style={{
          backgroundColor: "white",
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
