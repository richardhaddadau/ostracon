import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomHeader from "../navigation/Member/CustomHeader";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const NotificationsScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <CustomHeader screenName={"Notifications"} navigation={navigation} />
    </SafeAreaView>
  );
};

export default NotificationsScreen;
