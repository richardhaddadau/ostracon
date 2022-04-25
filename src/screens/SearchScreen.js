import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import CustomHeader from "../navigation/Member/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchScreen = ({ route, navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView>
      <CustomHeader screenName={"Search"} navigation={navigation} />
      <View style={styles.mainWrapper}>
        <View style={styles.searchBlock}>
          <TextInput
            style={styles.search}
            onChangeText={setSearchText}
            value={searchText}
            placeholder="Search Ostracon"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 0,
    backgroundColor: "#fff",
  },
  searchBlock: {
    padding: 20,
    backgroundColor: "#fff",
  },
  search: {
    padding: 10,
    backgroundColor: "#e7e7e7",
    borderRadius: 50,
  },
});

export default SearchScreen;
