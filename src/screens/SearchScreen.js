import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import BigButton from "../navigation/BigButton";
import CustomHeader from "../navigation/CustomHeader";

const SearchScreen = ({ route, navigation }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  searchBlock: {
    padding: 20,
    backgroundColor: "#fff",
  },
  search: {
    padding: 20,
    backgroundColor: "#e7e7e7",
    borderRadius: 50,
  },
});

export default SearchScreen;
