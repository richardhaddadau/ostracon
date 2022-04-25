import React from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Text, useTheme } from "@ui-kitten/components";

import ProfileTriangle from "./ProfileTriangle";
import CreateMaterialTopTabNavigator from "@react-navigation/material-top-tabs/src/navigators/createMaterialTopTabNavigator";
import posts from "../../data/posts";

const Tabs = CreateMaterialTopTabNavigator();

const ProfileHeader = () => {
  const theme = useTheme();

  const ProfileFeed = () => {
    return (
      <View>
        {posts.map((item, index) => (
          <Text key={index}>{item["user"]["name"]}</Text>
        ))}
      </View>
    );
  };

  const PraisesFeed = () => {
    return (
      <View style={{ height: 50 }}>
        <Text>{posts[0]["user"]["name"]}</Text>
      </View>
    );
  };

  return (
    <>
      <TouchableWithoutFeedback>
        <View style={{ backgroundColor: theme["color-primary-default"] }}>
          <Image
            style={{
              width: "100%",
              height: 180,
              opacity: 0.45,
            }}
            resizeMode="cover"
            source={{
              uri: "https://img.freepik.com/free-photo/modern-woman-taking-selfie_23-2147893976.jpg?w=1380&t=st=1650044937~exp=1650045537~hmac=a506f318de9ee55a645ebc2d871e85a63ab33855b93cad76f206e965d16dc1e3",
            }}
          />
        </View>
      </TouchableWithoutFeedback>

      <ProfileTriangle />
      <View
        style={[
          styles.profileContent,
          { backgroundColor: theme["bottom-bar-surface"] },
        ]}
      >
        <Text
          style={[
            styles.profileUsername,
            { color: theme["color-primary-default"] },
          ]}
          category="h5"
        >
          Username
        </Text>
        <Text
          style={[styles.profileHandle, { color: theme["color-primary-400"] }]}
          category="s1"
        >
          User
        </Text>
        <Text style={styles.profileBio} category="c2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>

        {/*  Profile Statistics */}
        <View style={styles.profileStats}>
          <View
            style={[
              styles.profileStatColumn,
              {
                marginRight: 20,
              },
            ]}
          >
            <Text
              style={[
                styles.profileStatNumber,
                { color: theme["color-primary-default"] },
              ]}
              category="c2"
            >
              60
            </Text>
            <Text
              style={[
                styles.profileStatDescription,
                { color: theme["color-primary-400"] },
              ]}
              category="c2"
            >
              following
            </Text>
          </View>

          <View style={styles.profileStatColumn}>
            <Text
              style={[
                styles.profileStatNumber,
                { color: theme["color-primary-default"] },
              ]}
              category="c2"
            >
              65
            </Text>
            <Text
              style={[
                styles.profileStatDescription,
                { color: theme["color-primary-400"] },
              ]}
              category="c2"
            >
              followers
            </Text>
          </View>
        </View>
      </View>

      <Tabs.Navigator style={{ minHeight: 100 }}>
        <Tabs.Screen name="Posts" component={ProfileFeed} />
        <Tabs.Screen name="Replies" component={PraisesFeed} />
        <Tabs.Screen name="Applause" component={PraisesFeed} />
        <Tabs.Screen name="Praises" component={PraisesFeed} />
      </Tabs.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  profileContent: {
    padding: 20,
  },
  profileUsername: {
    fontWeight: "bold",
  },
  profileHandle: {},
  profileBio: {
    marginVertical: 10,
    fontSize: 11,
  },
  profileStats: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  profileStatColumn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileStatNumber: {
    textAlign: "center",
    fontSize: 11.5,
    fontWeight: "700",
  },
  profileStatDescription: {
    marginLeft: 5,
    fontSize: 11,
  },
});

export default ProfileHeader;
