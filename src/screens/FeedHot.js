import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const FeedHot = ({ navigation, setScreen }) => {
  useFocusEffect(() => {
    setScreen("Popular");
  });

  return (
    <View>
      <Text>Hot</Text>
    </View>
  );
};

export default FeedHot;
