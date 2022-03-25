import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import BigButton from "../navigation/BigButton";
import CustomHeader from "../navigation/CustomHeader";

const HomeScreen = ({ route }) => {
  return (
    <SafeAreaView>
      <CustomHeader />
      <View>
        <ScrollView style={{ flex: 1 }}></ScrollView>
      </View>
      <BigButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
