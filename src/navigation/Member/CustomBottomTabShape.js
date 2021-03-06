import React, { useMemo } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";

// Import shaping libraries
import { Svg, Path } from "react-native-svg";
import { curveBasis, line } from "d3-shape";

// Import Theme
import { useTheme } from "@ui-kitten/components";

// Import constant values
import {
  BOTTOM_NAVIGATION_BAR_HEIGHT,
  OSTRACON_BUTTON_SPACE,
} from "../../constants/constants";

// Set our dimensions
const { width: viewWidth } = Dimensions.get("screen");
const barHeight = BOTTOM_NAVIGATION_BAR_HEIGHT;
const buttonSpace = OSTRACON_BUTTON_SPACE;

const shapePattern = line()
  .x(({ x }) => x)
  .y(({ y }) => y);

const rectLeft = shapePattern([
  { x: -5, y: 0 },
  { x: (viewWidth - buttonSpace) / 2, y: 0 },
]);

const rectRight = shapePattern([
  { x: (viewWidth + buttonSpace) / 2, y: 0 },
  { x: viewWidth + 5, y: 0 },
  { x: viewWidth + 5, y: barHeight + 10 },
  { x: -5, y: barHeight + 10 },
  { x: -5, y: 0 },
]);

const hole = shapePattern.curve(curveBasis)([
  { x: (viewWidth - buttonSpace) / 2, y: 0 },
  { x: (viewWidth - buttonSpace) / 2 + 10, y: 0 },
  {
    x: (viewWidth - buttonSpace) / 2 + 12,
    y: barHeight * 0.35,
  },
  {
    x: (viewWidth - buttonSpace) / 2 + 25,
    y: barHeight * 0.65,
  },
  {
    x: viewWidth / 2,
    y: barHeight * 0.725,
  },
  {
    x: (viewWidth + buttonSpace) / 2 - 25,
    y: barHeight * 0.65,
  },
  {
    x: (viewWidth + buttonSpace) / 2 - 12,
    y: barHeight * 0.35,
  },
  { x: (viewWidth + buttonSpace) / 2 - 10, y: 0 },
  { x: (viewWidth + buttonSpace) / 2, y: 0 },
]);

const d = `${rectLeft} ${hole} ${rectRight}`;

const CustomBottomTabShape = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View>
      <SafeAreaView>
        <Svg
          width={viewWidth + 10}
          height={barHeight}
          style={styles.barBackground}
        >
          <Path
            fill={theme["color-bar-surface"]}
            stroke={theme["color-primary-300"]}
            {...{ d }}
          />
        </Svg>
      </SafeAreaView>

      <SafeAreaView
        style={{
          position: "absolute",

          bottom: -insets.bottom,

          paddingTop: -barHeight,

          maxHeight: insets.bottom,
          width: viewWidth,

          backgroundColor: theme["color-bar-surface"],

          zIndex: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barBackground: {
    position: "absolute",

    margin: 0,
    padding: 0,

    bottom: 0,
    left: 0,

    elevation: 0,
    zIndex: 0,
  },
});

export default CustomBottomTabShape;
