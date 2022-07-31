import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SECURITY_PIN_SIZE, SECURITY_PIN_SPACING } from "../../constants/Fonts";
import { MEDIUM_MARGIN } from "../../constants/constants";

import NumberInput from "./NumberInput";
import ClearInput from "./ClearInput";
import EmptyBlock from "./EmptyBlock";

const NumberPad = ({ size = "large", pinLength = 4 }) => {
  // Constants
  const padSize = {
    small: "40%",
    medium: "55%",
    large: "70%",
  };

  // States
  const [currentPos, setCurrentPos] = useState(0);
  const [pinValue, setPinValue] = useState(["-", "-", "-", "-"]);
  const [disabled, setDisabled] = useState(false);

  return (
    <View style={{ width: padSize[size] }}>
      <View
        style={{
          marginBottom: MEDIUM_MARGIN,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={styles.pincode}>{pinValue}</Text>
      </View>
      <View style={[styles.padWrapper, { width: "100%" }]}>
        <NumberInput
          number={1}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
        <NumberInput
          number={2}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
        <NumberInput
          number={3}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
        <NumberInput
          number={4}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
        <NumberInput
          number={5}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
        <NumberInput
          number={6}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
        <NumberInput
          number={7}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
        <NumberInput
          number={8}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
        <NumberInput
          number={9}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
        <EmptyBlock />
        <NumberInput
          number={0}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
        <ClearInput
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          setPinValue={setPinValue}
          disabled={disabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pincode: {
    fontSize: SECURITY_PIN_SIZE,
    fontWeight: "bold",
    letterSpacing: SECURITY_PIN_SPACING,
    color: "white",
  },

  padWrapper: {
    position: "relative",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

export default NumberPad;
