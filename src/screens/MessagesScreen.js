import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import Theme
import { useTheme } from "@ui-kitten/components";

// Import Components
import CustomHeader from "../navigation/Member/CustomHeader";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FeedSearch from "./FeedSearch";
import MessagesPrivate from "./MessagesPrivate";
import MessagesGroup from "./MessagesGroup";

const GlobalFeed = () => <View></View>;

const TopTabs = createMaterialTopTabNavigator();

const MessagesScreen = ({ navigation }) => {
  const theme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader screenName={"Messages"} navigation={navigation} />

      <TopTabs.Navigator
        screenOptions={{
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            backgroundColor: theme["color-primary-default"],
          },
          tabBarLabelStyle: {
            fontWeight: "bold",
            fontSize: 12,
            textTransform: "capitalize",
          },
        }}
      >
        <TopTabs.Screen
          name="Private"
          component={MessagesPrivate}
          options={{ lazy: true }}
        />
        <TopTabs.Screen
          name="Group"
          component={MessagesGroup}
          options={{ lazy: true }}
        />
      </TopTabs.Navigator>
    </View>
  );
};

export default MessagesScreen;
