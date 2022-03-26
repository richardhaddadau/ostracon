import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BigButton from "../navigation/BigButton";
import CustomHeader from "../navigation/CustomHeader";

const ProfileScreen = ({ route, navigation }) => {
  return (
    <View>
      <View>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
