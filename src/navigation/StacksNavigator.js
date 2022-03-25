import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Screens
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import PostNewScreen from "../screens/PostNewScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

const MessagesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
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
        tabBarShowLabel: false,
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
        tabBarShowLabel: false,
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
