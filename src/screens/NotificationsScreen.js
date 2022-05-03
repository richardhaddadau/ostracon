import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomHeader from "../navigation/Member/CustomHeader";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationsPostInteraction from "../components/Notifications/NotificationsPostInteraction";
import NotificationsPraiseReceived from "../components/Notifications/NotificationsPraiseReceived";
import NotificationsReportReceived from "../components/Notifications/NotificationsReportReceived";
import NotificationsReportResponse from "../components/Notifications/NotificationsReportResponse";

const Tab = createBottomTabNavigator();

const NotificationsScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader screenName={"Notifications"} navigation={navigation} />

      <View style={{ flex: 1 }}>
        <NotificationsPostInteraction />
        <NotificationsPraiseReceived />
        <NotificationsReportReceived />
        <NotificationsReportResponse />
      </View>
    </View>
  );
};

export default NotificationsScreen;
