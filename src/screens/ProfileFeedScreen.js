import React, { useState, useEffect, useRef } from "react";
import { FlatList, Text, View } from "react-native";
import { useScrollToTop } from "@react-navigation/native";

// Import Theme
import { Divider, useTheme } from "@ui-kitten/components";

// Import Menu Elements
import BottomSheet from "reanimated-bottom-sheet";
import PostMenu from "../components/Post/PostMenu";

// Import Feed Components
import ProfileHeader from "../components/Profile/ProfileHeader";
import ListFooter from "../components/ListFooter";
import FeedPost from "../components/Post/FeedPost";
import posts from "../data/posts";

const ProfileFeedScreen = ({ navigation }) => {
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
    <View>
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

export default ProfileFeedScreen;
