import React from "react";
import { View, Text } from "react-native";
import CreateHeader from "../navigation/Member/CreateHeader";
import { goBack } from "../navigation/Member/RootNavigation";

const ChapterNewScreen = () => {
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

export default ChapterNewScreen;
