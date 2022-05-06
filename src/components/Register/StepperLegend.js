import React from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "@ui-kitten/components";
import { Touchable } from "react-native-web";
import { LOGIN_VERTICAL_PADDING } from "../../constants/constants";

const StepperLegend = ({
  currentStep = 0,
  totalSteps = 4,
  size = 35,
  setScreenStep,
}) => {
  const theme = useTheme();

  const generateSteps = () => {
    const stepsArray = [];
    for (let count = 1; count <= totalSteps; count++) {
      stepsArray.push(
        <View
          key={count}
          style={{ flexDirection: "row", alignItems: "flex-start" }}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              setScreenStep(count);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: size,
                height: size,
                borderRadius: 40,
                backgroundColor:
                  count <= currentStep
                    ? theme["color-primary-default"]
                    : theme["color-primary-300"],
              }}
            >
              <Text
                style={{
                  color:
                    count <= currentStep
                      ? theme["color-primary-200"]
                      : theme["color-primary-default"],
                }}
              >
                {count}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {count < totalSteps ? (
            <View
              style={{
                width: size / 2,
                height: size / 2,
                borderBottomWidth: 1,
                borderBottomColor:
                  count < currentStep
                    ? theme["color-primary-default"]
                    : theme["color-primary-300"],
              }}
            >
              <Text> </Text>
            </View>
          ) : null}
        </View>
      );
    }

    return stepsArray;
  };

  return (
    <View
      style={{ flexDirection: "row", paddingBottom: LOGIN_VERTICAL_PADDING }}
    >
      {generateSteps()}
    </View>
  );
};

export default StepperLegend;
