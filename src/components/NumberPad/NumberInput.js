import React, { useContext } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";
import { getSecureStore } from "../../utils/AsyncOps";
import { SECURITY_NUMBER_SIZE } from "../../constants/Fonts";
import SessionContext from "../../context/SessionContext";

const NumberInput = ({
  number,
  padSize = "large",
  disabled = false,
  currentPos,
  setCurrentPos,
  pinValue,
  pinSize,
  setPinValue,
}) => {
  // Theme
  const theme = useTheme();

  // States
  const [isAppSecured, setIsAppSecured] = useContext(SessionContext);

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
      onPress={async () => {
        const position = currentPos;
        if (position < pinSize) {
          const tempArray = pinValue.map((x) => x);
          tempArray[position] = number;
          setPinValue(tempArray);

          setCurrentPos(position + 1);

          if (position + 1 === pinSize) {
            const settingsObject = await getSecureStore("savedSettings");
            const securePin = settingsObject["securePin"];

            setIsAppSecured(tempArray.join("") !== securePin);
          }
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
          {number}
        </Text>
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

export default NumberInput;
