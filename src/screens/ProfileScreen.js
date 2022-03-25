import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import BigButton from "../navigation/BigButton";

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <BigButton send={"profile"} />
      <View>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
