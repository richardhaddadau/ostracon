import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// Import Navigation Libraries
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Notifications
import * as Notifications from "expo-notifications";

// Import Screens
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignOutScreen from "./src/screens/SignOutScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import FollowersScreen from "./src/screens/FollowersScreen";
import FollowingScreen from "./src/screens/FollowingScreen";

import PostNewScreen from "./src/screens/PostNewScreen";
import PostSingleScreen from "./src/screens/PostSingleScreen";
import ChatScreen from "./src/screens/ChatScreen";

// Import Icons
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const featherObj = {
              Home: ["Home", "home"],
              Search: ["Search", "search"],
              "New Post": ["New Post", "edit-2"],
              Messages: ["Messages", "mail"],
            };

            const ionsObj = {
              Profile: ["Profile", "ios-person-circle-outline"],
            };

            let iconName = 1;
            let iconSize = 24;
            let iconColor = "white";

            if (route.name === "Profile") {
              return (
                <Ionicons
                  name={ionsObj[route.name][iconName]}
                  size={iconSize}
                  color={iconColor}
                  style={styles.bottomNavButton}
                />
              );
            } else if (route.name === "New Post") {
              return (
                <Feather
                  name={featherObj[route.name][iconName]}
                  size={iconSize}
                  color={iconColor}
                  style={styles.bigButton}
                />
              );
            } else {
              return (
                <Feather
                  name={featherObj[route.name][iconName]}
                  size={iconSize}
                  color={iconColor}
                  style={styles.bottomNavButton}
                />
              );
            }
          },
          tabBarShowLabel: false,
          tabBarInactiveBackgroundColor: "#2D2F46",
          tabBarActiveBackgroundColor: "#937741",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="New Post" component={PostNewScreen} />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavButton: {
    borderRadius: 100,
  },
  bigButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 55,

    width: 70,
    borderRadius: 100,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",

    aspectRatio: 1 / 1,
  },
});
