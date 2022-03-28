import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigator from "./DrawerNavigator";
import ChaptersScreen from "../screens/ChaptersScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostNewScreen from "../screens/PostNewScreen";
import MessagesSingleScreen from "../screens/MessagesSingleScreen";
import MessagesNewScreen from "../screens/MessagesNewScreen";

const Stack = createNativeStackNavigator();

const StacksNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Chapters" component={ChapterStack} />
      <Stack.Screen name="Profile" component={ProfileStack} />
      <Stack.Screen name="New Post" component={PostNewScreen} />
      <Stack.Screen name="New Message" component={MessagesNewScreen} />
    </Stack.Navigator>
  );
};

const ChapterStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chapters Stack" component={ChaptersScreen} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile Stack"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const NewPostStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="New Post Stack"
        component={PostNewScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { StacksNavigator, NewPostStack };
