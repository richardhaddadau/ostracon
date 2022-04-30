import React, { useState, useEffect, useRef } from "react";
import { FlatList, View } from "react-native";
import { useScrollToTop } from "@react-navigation/native";

import FeedPost from "../components/Post/FeedPost";
import posts from "../data/posts";
import { Divider, useTheme } from "@ui-kitten/components";
import BottomSheet from "reanimated-bottom-sheet";
import PostMenu from "../components/Post/PostMenu";
import ListFooter from "../components/ListFooter";

const FeedLocal = ({ navigation }) => {
  // States
  const [feedData, setFeedData] = useState({});

  useEffect(() => {
    setFeedData(posts);
  }, [navigation]);

  const theme = useTheme();

  // Refs
  const bottomSheetRef = useRef(null);
  const ref = useRef(null);

  const renderItem = ({ item }) => {
    return <FeedPost item={item} bottomSheetRef={bottomSheetRef} />;
  };

  useScrollToTop(ref);

  return (
    <View style={{}}>
      <FlatList
        ref={ref}
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item["id"]}
        ItemSeparatorComponent={Divider}
        ListFooterComponent={ListFooter}
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

export default FeedLocal;
