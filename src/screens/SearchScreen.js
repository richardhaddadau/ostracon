import React, { useState } from "react";
import { SafeAreaView, View, TextInput, StyleSheet } from "react-native";
import BigButton from "../navigation/BigButton";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <BigButton />
      <View style={styles.searchBlock}>
        <TextInput
          style={styles.search}
          onChangeText={setSearchText}
          value={searchText}
          placeholder="Search Ostracon"
        />
      </View>
    </SafeAreaView>
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
