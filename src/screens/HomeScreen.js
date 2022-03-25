import React from "react";
import { View, Text, ScrollView } from "react-native";
import BigButton from "../navigation/BigButton";
import CustomHeader from "../navigation/CustomHeader";
import DrawerNavigator from "../navigation/DrawerNavigator";

const HomeScreen = ({ route }) => {
  return (
    <View>
      <DrawerNavigator />
      <CustomHeader screenName={route.name} />
      <View>
        <ScrollView style={{ flex: 1 }}></ScrollView>
      </View>
      <BigButton />
    </View>
  );
};

export default HomeScreen;
