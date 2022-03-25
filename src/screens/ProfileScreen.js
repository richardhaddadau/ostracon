import React from "react";
import { Text, View } from "react-native";
import BigButton from "../navigation/BigButton";

const ProfileScreen = () => {
  return (
    <View>
      <BigButton send={"profile"} />
      <View>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
