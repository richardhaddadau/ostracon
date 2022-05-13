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
import { HEADER_HEIGHT, HEADER_ICON_SIZE } from "../../constants/constants";

import { useTheme } from "@ui-kitten/components";
import { Profile } from "../../components/Ostracon-Std";

const CustomHeader = ({ screenName, navigation }) => {
  const theme = useTheme();

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerItem}>
        <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../../assets/ostracon-o-logo.png")}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{screenName}</Text>
      </View>

      <View style={styles.headerItem}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile Screen")}
        >
          <View>
            <Profile size={HEADER_ICON_SIZE} color={"white"} />
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

    backgroundColor: "#121212",
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
