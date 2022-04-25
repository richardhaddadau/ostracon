import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@ui-kitten/components";

import ProfileHeader from "../components/Profile/ProfileHeader";
import posts from "../data/posts";
import FeedPost from "../components/Post/FeedPost";

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
    return <FeedPost item={item} bottomSheetRef={bottomSheetRef} />;
  };

  //Theme
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ProfileHeader />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
