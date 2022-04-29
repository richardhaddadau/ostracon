import React from "react";

// Import Navigation Libraries
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MemberDrawer from "./MemberDrawer";

// Import Screens
import PostNewScreen from "../../screens/PostNewScreen";
import MessagesNewScreen from "../../screens/MessagesNewScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import MessagesSingleScreen from "../../screens/MessagesSingleScreen";
import PostSingleScreen from "../../screens/PostSingleScreen";
import ChaptersScreen from "../../screens/ChaptersScreen";

const Stack = createNativeStackNavigator();

const MemberStack = ({ setSigned }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainDrawer"
        component={MemberDrawer}
        options={{ headerShown: false }}
      />

      {/* The Chapters Page should be a Tab Navigator */}
      <Stack.Screen name="Chapters" component={ChaptersScreen} />

      {/* The Settings Page will be a Stack Navigator */}
      <Stack.Screen name="Settings" component={SettingsScreen} />

      <Stack.Screen name="New Post" component={PostNewScreen} />
      <Stack.Screen name="Single Post" component={PostSingleScreen} />
      <Stack.Screen name="New Message" component={MessagesNewScreen} />
      <Stack.Screen name="Single Message" component={MessagesSingleScreen} />
    </Stack.Navigator>
  );
};

export { MemberStack };
