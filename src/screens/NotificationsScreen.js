import React from "react";
import { View, Text } from "react-native";
import CustomHeader from "../navigation/CustomHeader";
import BigButton from "../navigation/BigButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const NotificationsScreen = ({ route, navigation }) => {
  return (
    <View>
      <CustomHeader screenName={"Notifications"} navigation={navigation} />
    </View>
  );
};

export default NotificationsScreen;
