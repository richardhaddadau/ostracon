import React from "react";
import { Text, View } from "react-native";

// Import Custom Components
import BigButton from "../navigation/BigButton";

const MessagesScreen = () => {
  return (
    <View>
      <Text>Messages Screen</Text>
      <BigButton send={"message"} />
    </View>
  );
};

export default MessagesScreen;
