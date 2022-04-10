import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";

import PostFooter from "../components/Post/PostFooter";
import FeedPost from "../components/Post/FeedPost";
import posts from "../data/posts";
import { Divider, useTheme } from "@ui-kitten/components";

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

  const theme = useTheme();

  return (
    <View style={{}}>
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item["id"]}
        ItemSeparatorComponent={Divider}
        ListFooterComponent={PostFooter}
        style={{ backgroundColor: theme["base-background"] }}
      />
    </View>
  );
};

export default FollowersFeed;
