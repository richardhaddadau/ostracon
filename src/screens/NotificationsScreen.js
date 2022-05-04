import React from "react";
import { ScrollView, View, Text } from "react-native";

// Import Screens
import NotificationsPostInteraction from "../components/Notifications/NotificationsPostInteraction";
import NotificationsPraiseReceived from "../components/Notifications/NotificationsPraiseReceived";
import NotificationsReportReceived from "../components/Notifications/NotificationsReportReceived";
import NotificationsReportResponse from "../components/Notifications/NotificationsReportResponse";
import NotificationsReported from "../components/Notifications/NotificationsReported";

// Import Components
import CustomHeader from "../navigation/Member/CustomHeader";
import ListFooter from "../components/ListFooter";

// Import Theme
import { useTheme } from "@ui-kitten/components";

const NotificationsScreen = ({ route, navigation }) => {
  const theme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader screenName={"Notifications"} navigation={navigation} />

      <ScrollView
        style={{ flex: 1, backgroundColor: theme["base-background"] }}
      >
        <NotificationsPostInteraction />
        <NotificationsPraiseReceived />
        <NotificationsReportReceived />
        <NotificationsReportResponse
          message={
            "Thank you for your report. We agree that the user you report has violated our rules and will address" +
            " this."
          }
          status={"success"}
        />
        <NotificationsReportResponse
          message={
            "Thank you for your report. In this case, we do not believe the user you reported has violated" +
            " our rules."
          }
        />
        <NotificationsReported
          message={
            "In this case, we found that the report was valid and you have violated our rules. At this stage, this" +
            " is only a warning but continued violation will lead to suspension."
          }
        />
        <ListFooter />
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
