import React from "react";
import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { navigate } from "../navigation/Member/RootNavigation";

// Import Icons
import { NewChapter as NewChapterStd } from "../components/Ostracon-Std";

// Import Theme and Constants and Icons
import { useTheme } from "@ui-kitten/components";
import {
  OSTRACON_BUTTON_BOTTOM_GAP,
  OSTRACON_BUTTON_SIZE,
  OSTRACON_ICON_SIZE,
} from "../constants/constants";

const ChaptersMain = () => {
  const theme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <Text>Hello</Text>

      <View style={styles.bottomBar}>
        <TouchableWithoutFeedback
          accessibilityRole="button"
          onPress={() => {
            navigate("New Chapter");
          }}
        >
          <View
            style={[
              styles.ostraconButton,
              {
                backgroundColor: theme["color-primary-default"],
              },
            ]}
          >
            <NewChapterStd size={OSTRACON_ICON_SIZE} color={"white"} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",

    paddingBottom: OSTRACON_BUTTON_BOTTOM_GAP,

    bottom: 0,
    left: 0,

    alignItems: "center",
    justifyContent: "flex-start",

    width: "100%",
  },
  ostraconButton: {
    justifyContent: "center",
    alignItems: "center",

    width: OSTRACON_BUTTON_SIZE,
    height: OSTRACON_BUTTON_SIZE,

    borderRadius: 100,

    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowColor: "black",

    elevation: 5,
  },
});

export default ChaptersMain;
