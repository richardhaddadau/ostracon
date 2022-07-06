import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import StackHeader from "../navigation/Member/StackHeader";

const OstraconPlus = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackHeader
        screenName={"Ostracon Plus"}
        navigation={navigation}
        close={true}
      />
      <Text>Ostracon Plus</Text>
    </SafeAreaView>
  );
};

export default OstraconPlus;
