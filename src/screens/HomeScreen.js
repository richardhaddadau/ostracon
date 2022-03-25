import React from "react";
import { View, Text } from "react-native";

const HomeScreen = ({ route }) => {
  return (
    <View>
        <Text>{route.name}</Text>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
