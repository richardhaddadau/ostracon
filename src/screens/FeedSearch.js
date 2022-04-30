import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "@ui-kitten/components";
import ListFooter from "../components/ListFooter";
import posts from "../data/posts";

// Theme
import { useTheme } from "@ui-kitten/components";

import FeedPost from "../components/Post/FeedPost";
import { useScrollToTop } from "@react-navigation/native";

const FeedSearch = () => {
  // States
  const [searchText, setSearchText] = useState("");
  const [feedData, setFeedData] = useState({});

  // Refs
  const bottomSheetRef = useRef(null);
  const ref = useRef(null);

  // Theme
  const theme = useTheme();

  const renderItem = ({ item }) => {
    return <FeedPost item={item} bottomSheetRef={bottomSheetRef} />;
  };

  useScrollToTop(ref);

  useEffect(() => {
    setFeedData(posts);
  }, []);

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.searchBlock}>
        <TextInput
          style={styles.search}
          onChangeText={setSearchText}
          value={searchText}
          placeholder="Search Ostracon"
        />
      </View>

      <ActivityIndicator
        style={{ paddingVertical: 20 }}
        size={"large"}
        color={theme["color-secondary-default"]}
      />

      <FlatList
        ref={ref}
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item["id"]}
        ItemSeparatorComponent={Divider}
        ListFooterComponent={ListFooter}
        style={{ backgroundColor: theme["base-background"] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,

    padding: 0,
  },
  searchBlock: {
    padding: 20,
    backgroundColor: "#fff",
  },
  search: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#e7e7e7",
    borderRadius: 50,
  },
});

export default FeedSearch;
