import React from "react";
import { Text, View } from "react-native";
import CustomHeader from "../navigation/CustomHeader";
import BigButton from "../navigation/BigButton";

const MessagesScreen = ({ route, navigation }) => {
  return (
    <View>
      <CustomHeader screenName={"Messages"} navigation={navigation} />
      <Text>Messages Screen</Text>
    </View>
  );
};

export default MessagesScreen;
