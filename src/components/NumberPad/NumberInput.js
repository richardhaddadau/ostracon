import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";
import { SECURITY_NUMBER_SIZE } from "../../constants/Fonts";

const NumberInput = ({
  number,
  padSize = "large",
  disabled = false,
  processPin,
  currentPos,
  returnPin,
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
            : "rgba(255, 255, 255, 1)",
        },
      ]}
      underlayColor={theme["color-secondary-100"]}
      onPress={() => {
        processPin(number);
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
          {number}
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

export default NumberInput;
