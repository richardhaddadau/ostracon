import React from "react";
import { useTheme } from "@ui-kitten/components";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { SECURITY_NUMBER_SIZE } from "../../constants/Fonts";
import { Backspace } from "../Ostracon-Active";

const EmptyBlock = () => {
  // Theme
  const theme = useTheme();
  return <View style={styles.numberBlock} />;
};

const styles = StyleSheet.create({
  numberBlock: {
    // this margin fits perfectly with the width below
    margin: "3%",

    alignItems: "center",
    justifyContent: "center",

    // this width allows for 3 columns
    width: "27%",
    aspectRatio: 1,

    borderRadius: 200,
  },
  numberText: { fontSize: SECURITY_NUMBER_SIZE },
});

export default EmptyBlock;
