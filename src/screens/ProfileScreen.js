import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@ui-kitten/components";

import CreateMaterialTopTabNavigator from "@react-navigation/material-top-tabs/src/navigators/createMaterialTopTabNavigator";
import FollowersFeed from "./FollowersFeed";
import ProfileHeader from "../components/Profile/ProfileHeader";
import posts from "../data/posts";
import FeedPost from "../components/Post/FeedPost";

const Tabs = CreateMaterialTopTabNavigator();

const ProfileFeed = () => {
  return (
    <View>
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
    return <FeedPost item={item} bottomSheetRef={bottomSheetRef} />;
  };

  //Theme
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <ProfileHeader />
        <Tabs.Navigator style={{ minHeight: 100 }}>
          <Tabs.Screen name="Posts" component={ProfileFeed} />
          <Tabs.Screen name="Praises" component={PraisesFeed} />
        </Tabs.Navigator>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
