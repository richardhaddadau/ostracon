import React from "react";
import { View, Text, ScrollView } from "react-native";
import CustomHeader from "../navigation/CustomHeader";
import BigButton from "../navigation/BigButton";

const HomeScreen = ({ route, navigation }) => {
  return (
    <View>
      <CustomHeader screenName={"Feed"} navigation={navigation} />
      <BigButton />
      <View>
        <ScrollView style={{ flex: 1 }}></ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
