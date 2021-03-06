import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Screens
import HomeScreen from "../screens/HomeScreen";
import FeedSearch from "../screens/FeedSearch";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import PostNewScreen from "../screens/PostNewScreen";
import ChaptersScreen from "../screens/ChaptersScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Feed" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Search" component={FeedSearch} />
    </Stack.Navigator>
  );
};

const MessagesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const PostStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="New Post" component={PostNewScreen} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  SearchStackNavigator,
  MessagesStackNavigator,
  ProfileStackNavigator,
  PostStackNavigator,
};
