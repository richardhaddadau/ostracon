import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import NumberInput from "./NumberInput";
import { SECURITY_PIN_SIZE, SECURITY_PIN_SPACING } from "../../constants/Fonts";
import { MEDIUM_MARGIN } from "../../constants/constants";

const NumberPad = ({ size = "large", pinLength = 4, returnPin }) => {
  // Constants
  const padSize = {
    small: "40%",
    medium: "55%",
    large: "70%",
  };
  const [pinValue, setPinValue] = useState([0, 0, 0, 0]);

  // States
  const [currentPos, setCurrentPos] = useState(0);
  const [pincode, setPincode] = useState([0, 0, 0, 0]);

  const processPin = (number) => {
    if (currentPos < pinLength) {
      console.log(number);
      console.log(currentPos);

      const tempArray = pinValue.map((x) => x);
      tempArray[currentPos] = number;
      setPinValue(tempArray);

      setCurrentPos(currentPos + 1);

      console.log(pinValue);
    } else {
      setCurrentPos(0);
      setPinValue([0, 0, 0, 0]);
    }
  };

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
          processPin={(value) => processPin(value)}
          currentPos={currentPos}
          returnPin={returnPin}
        />
        <NumberInput
          number={2}
          padSize={padSize[size]}
          processPin={(value) => processPin(value)}
          currentPos={currentPos}
          returnPin={returnPin}
        />
        <NumberInput
          number={3}
          padSize={padSize[size]}
          processPin={(value) => processPin(value)}
          currentPos={currentPos}
          returnPin={returnPin}
        />
        <NumberInput
          number={4}
          padSize={padSize[size]}
          processPin={(value) => processPin(value)}
          currentPos={currentPos}
          returnPin={returnPin}
        />
        <NumberInput
          number={5}
          padSize={padSize[size]}
          processPin={(value) => processPin(value)}
          currentPos={currentPos}
          returnPin={returnPin}
        />
        <NumberInput
          number={6}
          padSize={padSize[size]}
          processPin={(value) => processPin(value)}
          currentPos={currentPos}
          returnPin={returnPin}
        />
        <NumberInput
          number={7}
          padSize={padSize[size]}
          processPin={(value) => processPin(value)}
          currentPos={currentPos}
          returnPin={returnPin}
        />
        <NumberInput
          number={8}
          padSize={padSize[size]}
          processPin={(value) => processPin(value)}
          currentPos={currentPos}
          returnPin={returnPin}
        />
        <NumberInput
          number={9}
          padSize={padSize[size]}
          processPin={(value) => processPin(value)}
          currentPos={currentPos}
          returnPin={returnPin}
        />
        <NumberInput
          number={0}
          padSize={padSize[size]}
          processPin={(value) => processPin(value)}
          currentPos={currentPos}
          returnPin={returnPin}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pincode: {
    marginRight: -SECURITY_PIN_SPACING,

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
