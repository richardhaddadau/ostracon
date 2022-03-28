import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

import CustomHeader from "../navigation/CustomHeader";
import FeedPost from "../components/FeedPost";

const HomeScreen = ({ route, navigation }) => {
  const [feedData, setFeedData] = useState({});

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data)
      .then((actualData) => setFeedData(actualData));
  });

  const renderItem = ({ item }) => {
    return <FeedPost item={item} />;
  };

  return (
    <>
      <CustomHeader screenName={"Feed"} navigation={navigation} />
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ backgroundColor: "white", paddingBottom: 100 }}
      />
    </>
  );
};

export default HomeScreen;
