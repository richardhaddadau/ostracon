import React from "react";
import { useTheme } from "@ui-kitten/components";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { SECURITY_NUMBER_SIZE } from "../../constants/Fonts";
import { Backspace } from "../Ostracon-Active";

const ClearInput = ({
  currentPos,
  setCurrentPos,
  pinValue,
  setPinValue,
  disabled,
}) => {
  // Theme
  const theme = useTheme();
  return (
    <TouchableHighlight
      style={[
        styles.numberBlock,
        {
          backgroundColor: disabled
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(255, 255, 255, 0.95)",
        },
      ]}
      underlayColor={theme["color-secondary-400"]}
      onPress={() => {
        if (currentPos > 0) {
          const position = currentPos - 1;

          const tempArray = pinValue.map((x) => x);
          tempArray[position] = "-";
          setPinValue(tempArray);

          setCurrentPos(position);
        }
      }}
    >
      <View>
        <View style={{ marginLeft: -3 }}>
          <Backspace color={theme["color-secondary-default"]} size={30} />
        </View>
      </View>
    </TouchableHighlight>
  );
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

export default ClearInput;
