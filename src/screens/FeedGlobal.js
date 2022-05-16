import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList } from "react-native";
import CustomHeader from "../navigation/Member/CustomHeader";
import { useFocusEffect, useScrollToTop } from "@react-navigation/native";
import ListFooter from "../components/ListFooter";
import BottomSheet from "reanimated-bottom-sheet";
import PostMenu from "../components/Post/PostMenu";
import posts from "../data/posts";
import { useTheme } from "@ui-kitten/components";
import FeedPost from "../components/Post/FeedPost";

const FeedGlobal = ({ navigation, setScreen }) => {
  // States
  const [feedData, setFeedData] = useState({});

  useFocusEffect(() => {
    setScreen("Global Feed");
  });

  useEffect(() => {
    setFeedData(posts);
  }, [navigation]);

  // Theme
  const theme = useTheme();

  // Refs
  const bottomSheetRef = useRef(null);
  const ref = useRef(null);

  const renderItem = ({ item }) => {
    return <FeedPost item={item} bottomSheetRef={bottomSheetRef} />;
  };

  useScrollToTop(ref);

  return (
    <View>
      <FlatList
        ref={ref}
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item["id"]}
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

export default FeedGlobal;
