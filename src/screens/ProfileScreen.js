import React, { useEffect, useRef, useState } from "react";
import { Animated, View, Text, StyleSheet, FlatList } from "react-native";

import { useTheme } from "@ui-kitten/components";

import ProfileHeader from "../components/Profile/ProfileHeader";
import posts from "../data/posts";

import CreateMaterialTopTabNavigator from "@react-navigation/material-top-tabs/src/navigators/createMaterialTopTabNavigator";
import { TOP_NAVIGATION_FULL_HEIGHT } from "../constants/constants";
import ListFooter from "../components/ListFooter";
import { Feather } from "@expo/vector-icons";

const Tabs = CreateMaterialTopTabNavigator();

const ProfileScreen = ({ navigation }) => {
  // States
  const [feedData, setFeedData] = useState({});

  useEffect(() => {
    setFeedData(posts);
  }, [navigation]);

  // Refs
  const bottomSheetRef = useRef(null);
  const ref = useRef(null);

  const ProfileFeed = () => {
    return (
      <View>
        {/*<ProfileHeader />*/}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          ListHeaderComponent={ProfileHeader}
          ListFooterComponent={ListFooter}
        />
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View key={item.id} style={{ padding: 50 }}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  //Theme
  const theme = useTheme();

  const DATA = [
    {
      id: "n1",
      title: "item 1",
    },
    {
      id: "n2",
      title: "item 2",
    },
    {
      id: "n3",
      title: "item 3",
    },
    {
      id: "n4",
      title: "item 4",
    },

    {
      id: "n5",
      title: "item 5",
    },

    {
      id: "n6",
      title: "item 6",
    },

    {
      id: "n7",
      title: "item 7",
    },

    {
      id: "n8",
      title: "item 8",
    },

    {
      id: "n9",
      title: "item 9",
    },
  ];

  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          justifyContent: "center",
          height: TOP_NAVIGATION_FULL_HEIGHT,
        },
      }}
    >
      <Tabs.Screen name="Posts" component={ProfileFeed} />
      <Tabs.Screen name="Replies" component={ProfileFeed} />
      <Tabs.Screen name="Applause" component={ProfileFeed} />
      <Tabs.Screen name="Praises" component={ProfileFeed} />
    </Tabs.Navigator>
  );
};

export default ProfileScreen;
