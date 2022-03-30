import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomHeader from "../navigation/CustomHeader";

const MessagesScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <CustomHeader screenName={"Messages"} navigation={navigation} />
      <Text>Messages Screen</Text>
    </SafeAreaView>
  );
};

export default MessagesScreen;
