import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PointsReceived from "./PointsReceived";
import PointsGiven from "./PointsGiven";
import PointsDashboard from "./PointsDashboard";
import StackHeader from "../navigation/Member/StackHeader";

const Tab = createMaterialTopTabNavigator();

const PointsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StackHeader screenName={"Praise"} navigation={navigation} close={true} />
      <Tab.Navigator>
        <Tab.Screen
          name={"Points Dashboard"}
          component={PointsDashboard}
          options={{
            tabBarLabel: "Dashboard",
          }}
        />
        <Tab.Screen
          name={"Points Given"}
          component={PointsGiven}
          options={{
            tabBarLabel: "Given",
          }}
        />
        <Tab.Screen
          name={"Points Received"}
          component={PointsReceived}
          options={{
            tabBarLabel: "Received",
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default PointsScreen;
