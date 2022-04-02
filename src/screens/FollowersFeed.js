import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { Divider } from "react-native-paper";

import PostFooter from "../components/Post/PostFooter";
import FeedPost from "../components/Post/FeedPost";
import posts from "../data/posts";
import { SafeAreaView } from "react-native-safe-area-context";

const renderItem = ({ item }) => {
  return <FeedPost item={item} />;
};

const FollowersFeed = () => {
  // States
  const [feedData, setFeedData] = useState({});

  useEffect(() => {
    //   axios("https://jsonplaceholder.typicode.com/posts")
    //     .then((response) => response.data)
    //     .then((actualData) => setFeedData(actualData));
    setFeedData(posts);
  });

  return (
    <View style={{}}>
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item["id"]}
        ItemSeparatorComponent={Divider}
        ListFooterComponent={PostFooter}
      />
    </View>
  );
};

export default FollowersFeed;
