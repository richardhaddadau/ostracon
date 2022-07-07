import React, { useState, useEffect, useRef } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import { useFocusEffect, useScrollToTop } from "@react-navigation/native";

import FeedPost from "../components/Post/FeedPost";
import posts from "../data/posts";
import { Divider, useTheme } from "@ui-kitten/components";
import BottomSheet from "reanimated-bottom-sheet";
import PostMenu from "../components/Post/PostMenu";
import ListFooter from "../components/ListFooter";
import { POST_VERTICAL_PADDING } from "../constants/constants";
import { GetCurrentUser } from "../utils/Auth";

const FeedLocal = ({ navigation, setScreen }) => {
  // States
  const [feedData, setFeedData] = useState({});
  const [loading, setLoading] = useState(true);

  useFocusEffect(() => {
    setScreen("My Feed");
  });

  setTimeout(() => {
    setLoading(false);
  }, 1000);

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
      {loading ? (
        <ActivityIndicator
          style={{ paddingTop: POST_VERTICAL_PADDING }}
          size={"large"}
          color={theme["color-secondary-default"]}
        />
      ) : (
        <View>
          <FlatList
            ref={ref}
            data={posts}
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
      )}
    </View>
  );
};

export default FeedLocal;
