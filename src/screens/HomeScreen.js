import React from "react";
import { View, Text, ScrollView } from "react-native";
import BigButton from "../navigation/BigButton";
import CustomHeader from "../navigation/CustomHeader";
import DrawerNav from "../navigation/DrawerNav";

const HomeScreen = ({ route }) => {
  return (
    <View>
      <DrawerNav />
      <CustomHeader screenName={route.name} />
      <View>
        <ScrollView style={{ flex: 1 }}></ScrollView>
      </View>
      <BigButton />
    </View>
  );
};

export default HomeScreen;
