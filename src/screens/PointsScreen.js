import React from "react";
import { View, Text } from "react-native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PointsReceived from "./PointsReceived";
import PointsGiven from "./PointsGiven";
import PointsDashboard from "./PointsDashboard";

const Tab = createMaterialTopTabNavigator();

const PointsScreen = () => {
  return (
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
  );
};

export default PointsScreen;
