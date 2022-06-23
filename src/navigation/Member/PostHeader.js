import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

// Import Icons
import {
  Clap as ClapStd,
  Send as SendStd,
} from "../../components/Ostracon-Std";

import { Send as SendAct } from "../../components/Ostracon-Active";

// Import Constants
import { HEADER_HEIGHT, HEADER_ICON_SIZE } from "../../constants/constants";

import { useTheme } from "@ui-kitten/components";

const PostHeader = ({ headerTitle, GoBack }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.headerWrapper,
        {
          backgroundColor: theme["color-primary-default"],
        },
      ]}
    >
      <View style={styles.headerItem}>
        <TouchableWithoutFeedback
          onPress={() => {
            GoBack();
          }}
        >
          <View>
            <ClapStd size={HEADER_ICON_SIZE} color={"white"} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{headerTitle}</Text>
      </View>

      <View style={styles.headerItem}>
        <TouchableWithoutFeedback onPress={() => console.log("Create Post")}>
          <View>
            <SendAct size={HEADER_ICON_SIZE} color={"white"} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",

    margin: 0,
    padding: 0,

    width: "100%",
    height: HEADER_HEIGHT,

    justifyContent: "space-between",
    alignItems: "stretch",
  },
  headerItem: {
    justifyContent: "center",
    alignItems: "center",

    width: "15%",
  },
  headerTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",

    flexGrow: 2,
  },
  logoImage: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default PostHeader;
