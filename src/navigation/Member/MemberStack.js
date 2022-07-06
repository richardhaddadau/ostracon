import React from "react";

// Import Navigation Libraries
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
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
import OstraconPlusScreen from "../../screens/OstraconPlus";
import ProfileScreen from "../../screens/ProfileScreen";
import ChapterNewScreen from "../../screens/ChapterNewScreen";

const Stack = createStackNavigator();

const MemberStack = () => {
  // Theme
  const theme = useTheme();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={MemberDrawer} />

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

      <Stack.Screen name="Ostracon Plus" component={OstraconPlusScreen} />
      <Stack.Screen
        name="New Post"
        component={PostNewScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
        }}
      />
      <Stack.Screen name="Single Post" component={PostSingleScreen} />
      <Stack.Screen
        name="New Message"
        component={MessagesNewScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
        }}
      />
      <Stack.Screen
        name="New Chapter"
        component={ChapterNewScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
        }}
      />
      <Stack.Screen name="Single Message" component={MessagesSingleScreen} />
      <Stack.Screen name="Profile Screen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export { MemberStack };
