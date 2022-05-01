import React, { useRef, useState } from "react";
import {
  Platform,
  Animated,
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import { Divider, Text, Modal, Card, useTheme } from "@ui-kitten/components";

import ProfileTriangle from "./ProfileTriangle";
import posts from "../../data/posts";
import { BlurView } from "expo-blur";
import { AddFollower } from "../Ostracon-Std";
import { RemoveFollow } from "../Ostracon-Active";

import { TOP_NAVIGATION_ICON_SIZE } from "../../constants/constants";

const iconSize = TOP_NAVIGATION_ICON_SIZE * 1.5;

const ProfileHeader = ({ scrollY }) => {
  // States
  const [showModal, setShowModal] = useState(false);

  // User Info
  const [username, setUsername] = useState("Archer Sterling");
  const [handle, setHandle] = useState("randy.randleman");
  const [following, setFollowing] = useState(false);
  const [followingCount, setFollowingCount] = useState(60);
  const [followerCount, setFollowerCount] = useState(65);

  const theme = useTheme();
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
  const { width: viewWidth, height: viewHeight } = Dimensions.get("window");

  return (
    <View style={{ zIndex: 100 }}>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View
          style={{
            backgroundColor: theme["color-primary-default"],
          }}
        >
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

          <AnimatedBlurView
            intensity={Platform.OS === "ios" ? 30 : 95}
            tint={"light"}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              opacity: scrollY.interpolate({
                inputRange: [-50, 0, 90],
                outputRange: [1, 0, 1],
              }),
            }}
          />
        </View>
      </TouchableWithoutFeedback>

      <ProfileTriangle />

      <View
        style={[
          styles.profileContent,
          { backgroundColor: theme["colour-bar-surface"] },
        ]}
      >
        <Text
          style={[
            styles.profileUsername,
            { color: theme["color-primary-default"] },
          ]}
          category="h5"
        >
          {username}
        </Text>
        <Text
          style={[styles.profileHandle, { color: theme["color-primary-400"] }]}
          category="s1"
        >
          @{handle}
        </Text>

        <Divider />

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
              {followingCount}
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
              {followerCount}
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

          <TouchableWithoutFeedback
            onPress={() => {
              if (following) {
                setFollowing(false);
                setFollowerCount(followerCount - 1);
              } else {
                setFollowing(true);
                setFollowerCount(followerCount + 1);
              }
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              {following ? (
                <RemoveFollow
                  size={iconSize + 3}
                  color={theme["color-primary-default"]}
                />
              ) : (
                <AddFollower
                  size={iconSize + 3}
                  color={theme["color-primary-default"]}
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Divider />

        <Text style={styles.profileBio} category="c2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>

      <Modal
        visible={showModal}
        backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        onBackdropPress={() => setShowModal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <Image
            onPress={() => setShowModal(false)}
            style={{
              width: viewWidth,
              height: viewHeight * 0.5,
            }}
            resizeMode="cover"
            source={{
              uri: "https://img.freepik.com/free-photo/modern-woman-taking-selfie_23-2147893976.jpg?w=1380&t=st=1650044937~exp=1650045537~hmac=a506f318de9ee55a645ebc2d871e85a63ab33855b93cad76f206e965d16dc1e3",
            }}
          />
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContent: {
    padding: 20,
  },
  profileUsername: {
    fontWeight: "bold",
  },
  profileHandle: {
    marginBottom: 10,
    fontWeight: "normal",
  },
  profileStats: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 20,
  },
  profileStatColumn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profileStatNumber: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "700",
  },
  profileStatDescription: {
    marginLeft: 5,
    fontSize: 14,
  },
  profileBio: {
    marginTop: 10,

    fontSize: 14,
    fontWeight: "400",
  },
});

export default ProfileHeader;
