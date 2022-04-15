import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../navigation/CustomHeader";
import { useTheme, Text } from "@ui-kitten/components";

import CreateMaterialTopTabNavigator from "@react-navigation/material-top-tabs/src/navigators/createMaterialTopTabNavigator";
import FollowersFeed from "./FollowersFeed";
import ProfileHeader from "../components/Profile/ProfileHeader";

const Tabs = CreateMaterialTopTabNavigator();

const ProfileScreen = ({ navigation }) => {
  //Theme
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader screenName={"Profile"} navigation={navigation} />

      <ProfileHeader />
      <Tabs.Navigator>
        <Tabs.Screen name="Test" component={FollowersFeed} />
        <Tabs.Screen name="Another" component={FollowersFeed} />
      </Tabs.Navigator>
    </SafeAreaView>
  );
};

export default ProfileScreen;
