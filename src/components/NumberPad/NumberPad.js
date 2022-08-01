import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SECURITY_PIN_SIZE, SECURITY_PIN_SPACING } from "../../constants/Fonts";
import { MEDIUM_MARGIN } from "../../constants/constants";

import NumberInput from "./NumberInput";
import ClearInput from "./ClearInput";
import EmptyBlock from "./EmptyBlock";
import { getSecureStore } from "../../utils/AsyncOps";

const NumberPad = ({ size = "large", pinLength = 4 }) => {
  // Constants
  const padSize = {
    small: "40%",
    medium: "55%",
    large: "70%",
  };

  // States
  const [currentPos, setCurrentPos] = useState(0);
  const [pinValue, setPinValue] = useState([]);
  const [pinSize, setPinSize] = useState(0);
  const [disabled, setDisabled] = useState(false);

  useEffect(async () => {
    const settingsObject = await getSecureStore("savedSettings");
    const secureApp = settingsObject ? settingsObject["secureApp"] : null;
    const securePin = settingsObject ? settingsObject["securePin"] : null;

    pinLength = securePin ? securePin.length : 0;
    setPinSize(pinLength);
    let dashes = [];

    for (let x = 0; x < securePin.length; x++) {
      dashes.push("-");
    }

    setPinValue(dashes);
  }, []);

  let numberInputs = [];

  for (let x = 1; x < 10; x++) {
    numberInputs.push(
      <NumberInput
        number={x}
        padSize={padSize[size]}
        currentPos={currentPos}
        setCurrentPos={setCurrentPos}
        pinValue={pinValue}
        pinSize={pinSize}
        setPinValue={setPinValue}
        disabled={disabled}
        key={`numberInput-${x}`}
      />
    );
  }

  return (
    <View style={{ width: padSize[size] }}>
      <View
        style={{
          marginBottom: MEDIUM_MARGIN,
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={styles.pinCode}>{pinValue}</Text>
      </View>
      <View style={[styles.padWrapper, { width: "100%" }]}>
        {[numberInputs]}
        <EmptyBlock />
        <NumberInput
          number={0}
          padSize={padSize[size]}
          currentPos={currentPos}
          setCurrentPos={setCurrentPos}
          pinValue={pinValue}
          pinSize={pinSize}
          setPinValue={setPinValue}
          disabled={disabled}
          key={`numberInput-${0}`}
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
  pinCode: {
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
