import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import CustomHeader from "../navigation/CustomHeader";


const HomeScreen = ({ route, navigation }) => {
  useEffect(() => {
    axios
  })
  const DATA = [{id: }];

  return (
    <View>
      <CustomHeader screenName={"Feed"} navigation={navigation} />
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
