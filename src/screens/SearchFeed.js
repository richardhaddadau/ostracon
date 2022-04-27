import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SearchFeed = () => {
  const [searchText, setSearchText] = useState("");

  return (
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
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#e7e7e7",
    borderRadius: 50,
  },
});

export default SearchFeed;
