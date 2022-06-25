import React from "react";
import { Text, View } from "react-native";
import { goBack } from "../navigation/Member/RootNavigation";
import CreateHeader from "../navigation/Member/PostHeader";

const MessagesNewScreen = () => {
  return (
    <View>
      <CreateHeader
        headerTitle="New Message"
        GoBack={goBack}
        SendButton={false}
      />
      <Text>New Message Screen</Text>
    </View>
  );
};

export default MessagesNewScreen;
