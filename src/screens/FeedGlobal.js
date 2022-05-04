import React, { useEffect } from "react";
import { View, Text } from "react-native";
import CustomHeader from "../navigation/Member/CustomHeader";
import { useFocusEffect } from "@react-navigation/native";

const FeedGlobal = ({ navigation, setScreen }) => {
  useFocusEffect(() => {
    setScreen("Global Feed");
  });

  return (
    <View>
      <Text>Global</Text>
    </View>
  );
};

export default FeedGlobal;
