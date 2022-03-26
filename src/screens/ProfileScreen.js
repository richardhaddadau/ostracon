import React from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BigButton from "../navigation/BigButton";
import CustomHeader from "../navigation/CustomHeader";

const ProfileScreen = ({ route, navigation }) => {
  const thisNav = useNavigation();

  console.log(thisNav);

  return (
    <View>
      <CustomHeader screenName={"Profile"} navigation={navigation} />
      <BigButton send={"profile"} />
      <View>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
