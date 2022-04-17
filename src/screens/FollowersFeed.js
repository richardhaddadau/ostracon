import React, { useState, useEffect, useRef } from "react";
import { FlatList, View } from "react-native";

import FeedPost from "../components/Post/FeedPost";
import posts from "../data/posts";
import { Divider, useTheme } from "@ui-kitten/components";
import BottomSheet from "reanimated-bottom-sheet";
import PostMenu from "../components/Post/PostMenu";

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

  // Refs
  const bottomSheetRef = useRef(null);

  const renderItem = ({ item }) => {
    return <FeedPost item={item} bottomSheetRef={bottomSheetRef} />;
  };

  return (
    <View style={{}}>
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item["id"]}
        ItemSeparatorComponent={Divider}
        style={{ backgroundColor: theme["base-background"] }}
      />

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["100%", 0]}
        initialSnap={1}
        renderContent={PostMenu}
      />
    </View>
  );
};

export default FollowersFeed;
