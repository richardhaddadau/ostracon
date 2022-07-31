import React from "react";
import { useTheme } from "@ui-kitten/components";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { SECURITY_NUMBER_SIZE } from "../../constants/Fonts";

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
          margin: "2%",
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
        <Text
          style={[
            styles.numberText,
            {
              color: disabled
                ? theme["color-primary-500"]
                : theme["color-secondary-400"],
            },
          ]}
        >
          back
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  numberBlock: {
    alignItems: "center",
    justifyContent: "center",

    width: "27%",
    aspectRatio: 1,

    borderRadius: 200,
  },
  numberText: { fontSize: SECURITY_NUMBER_SIZE },
});

export default ClearInput;
