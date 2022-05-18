import React, { useRef } from "react";
import { Animated } from "react-native";
import { useTheme } from "@ui-kitten/components";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ListFooter from "../components/ListFooter";

const ProfileHomeScreen = () => {
  const theme = useTheme();
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: theme["color-bar-surface"] }}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ],
        { useNativeDriver: true }
      )}
    >
      <ProfileHeader scrollY={scrollY} />
      <ListFooter />
    </Animated.ScrollView>
  );
};

export default ProfileHomeScreen;
