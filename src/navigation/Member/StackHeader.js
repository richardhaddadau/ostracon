import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

// Import Constants
import {
  HEADER_HEIGHT,
  POST_ICON_SIZE,
  HEADER_ICON_SIZE,
} from "../../constants/constants";

// Import Icons
import { Back as BookStd } from "../../components/Ostracon-Std";
import {
  Back as BackActive,
  Close as CloseActive,
} from "../../components/Ostracon-Active";

import { useTheme } from "@ui-kitten/components";
import { Profile } from "../../components/Ostracon-Std";

const StackHeader = ({ screenName, navigation, close = false }) => {
  const theme = useTheme();

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.headerItem}>
        {close ? (
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View>
              <CloseActive size={HEADER_ICON_SIZE} color={"#fff"} />
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View>
              <BackActive size={POST_ICON_SIZE} color={"#fff"} />
            </View>
          </TouchableWithoutFeedback>
        )}
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

export default StackHeader;
