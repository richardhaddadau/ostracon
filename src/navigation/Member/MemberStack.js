import React from "react";

// Import Navigation Libraries
import { createStackNavigator } from "@react-navigation/stack";
import MemberDrawer from "./MemberDrawer";

// Import Theme
import { useTheme } from "@ui-kitten/components";

// Import Screens
import PostNewScreen from "../../screens/PostNewScreen";
import MessagesNewScreen from "../../screens/MessagesNewScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import MessagesSingleScreen from "../../screens/MessagesSingleScreen";
import PostSingleScreen from "../../screens/PostSingleScreen";
import ChaptersScreen from "../../screens/ChaptersScreen";
import PointsScreen from "../../screens/PointsScreen";
import OstraconGoldScreen from "../../screens/OstraconGold";
import ProfileScreen from "../../screens/ProfileScreen";

const Stack = createStackNavigator();

const MemberStack = ({ setIsSignedIn }) => {
  // Theme
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainDrawer"
        component={MemberDrawer}
        options={{
          headerShown: false,
        }}
      />

      {/* The Chapters Page is a Tab Navigator */}
      <Stack.Screen name="Chapters" component={ChaptersScreen} />

      {/* The Points Page is a Tab Navigator */}
      <Stack.Screen name="Points" component={PointsScreen} />

      {/* The Settings Page is a Stack Navigator */}
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: theme["color-header-surface"],
          },
          headerTintColor: "white",
        }}
      />

      <Stack.Screen name="Ostracon Gold" component={OstraconGoldScreen} />
      <Stack.Screen name="New Post" component={PostNewScreen} />
      <Stack.Screen name="Single Post" component={PostSingleScreen} />
      <Stack.Screen name="New Message" component={MessagesNewScreen} />
      <Stack.Screen name="Single Message" component={MessagesSingleScreen} />
      <Stack.Screen name="Profile Screen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export { MemberStack };
