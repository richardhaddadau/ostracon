import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { navigate } from "../navigation/Member/RootNavigation";
import { NewChapter as NewChapterStd } from "../components/Ostracon-Std";
import {
  OSTRACON_BUTTON_BOTTOM_GAP,
  OSTRACON_BUTTON_SIZE,
  OSTRACON_ICON_SIZE,
} from "../constants/constants";
import { useTheme } from "@ui-kitten/components";

const ChapterSingleScreen = () => {
  const theme = useTheme();

  return (
    <View style={styles.bottomBar}>
      <TouchableWithoutFeedback
        accessibilityRole="button"
        onPress={() => {
          navigate("New Post", {
            chapter: "test",
          });
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

export default ChapterSingleScreen;
