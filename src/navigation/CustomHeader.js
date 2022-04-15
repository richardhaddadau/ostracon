import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

// Import Icons

// Import Constants
import { HEADER_HEIGHT } from "../constants/constants";

import { useTheme } from "@ui-kitten/components";

const CustomHeader = ({ screenName, navigation }) => {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.headerWrapper,
        {
          backgroundColor: "#121212",
        },
      ]}
    >
      <View style={styles.headerItem}>
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../assets/ostracon-o-logo.png")}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{screenName}</Text>
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
  headerButton: {},
});

export default CustomHeader;
