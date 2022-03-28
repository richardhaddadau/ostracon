import React, { useMemo } from "react";
import { Dimensions, StyleSheet } from "react-native";

// Import shaping libraries
import { Svg, Path } from "react-native-svg";
import { curveBasis, line } from "d3-shape";

// Import constant values
import {
  BOTTOM_NAVIGATION_BAR_HEIGHT,
  OSTRACON_BUTTON_SPACE,
} from "../theme/constants";

// Set our dimensions
const { width: viewWidth } = Dimensions.get("screen");
const barHeight = BOTTOM_NAVIGATION_BAR_HEIGHT;
const buttonSpace = OSTRACON_BUTTON_SPACE;

const shapePattern = line()
  .x(({ x }) => x)
  .y(({ y }) => y);

// The Left and Right Sides will be ViewWidth - the Space for the button halved
// Each Tab width will be either side halved
const tabWidth = (viewWidth - buttonSpace) / 2 / 2;

// const leftSide = shapePattern([
//   { x: 0, y: 0 },
//   { x: tabWidth * 2, y: 0 },
// ]);
//
// const center = shapePattern.curve(curveBasis)([
//   { x: (viewWidth - buttonSpace) / 2, y: 0 },
//   { x: (viewWidth - buttonSpace) / 2 + 10, y: 0 },
//   {
//     x: (viewWidth - buttonSpace) / 2 + 10,
//     y: barHeight * 0.3,
//   },
//   {
//     x: (viewWidth - buttonSpace) / 2 + 28,
//     y: barHeight * 0.565,
//   },
//   {
//     x: viewWidth / 2,
//     y: barHeight * 0.68,
//   },
//   {
//     x: (viewWidth + buttonSpace) / 2 - 28,
//     y: barHeight * 0.565,
//   },
//   {
//     x: (viewWidth + buttonSpace) / 2 - 10,
//     y: barHeight * 0.25,
//   },
//   { x: (viewWidth + buttonSpace) / 2 - 12, y: 0 },
//   { x: (viewWidth + buttonSpace) / 2, y: 0 },
// ]);
//
// const rightSide = shapePattern([
//   { x: viewWidth - tabWidth * 2, y: 0 },
//   { x: viewWidth, y: 0 },
//   { x: viewWidth, y: barHeight },
//   { x: 0, y: barHeight },
//   { x: 0, y: 0 },
// ]);

const rect = shapePattern([
  { x: -5, y: 0 },
  { x: (viewWidth - buttonSpace) / 2, y: 0 },
  { x: (viewWidth + buttonSpace) / 2, y: 0 },
  { x: viewWidth + 5, y: 0 },
  { x: viewWidth + 5, y: barHeight },
  { x: -5, y: barHeight },
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
    y: barHeight * 0.635,
  },
  {
    x: viewWidth / 2,
    y: barHeight * 0.7,
  },
  {
    x: (viewWidth + buttonSpace) / 2 - 25,
    y: barHeight * 0.635,
  },
  {
    x: (viewWidth + buttonSpace) / 2 - 12,
    y: barHeight * 0.35,
  },
  { x: (viewWidth + buttonSpace) / 2 - 10, y: 0 },
  { x: (viewWidth + buttonSpace) / 2, y: 0 },
]);

const d = `${rect} ${hole}`;

const TabShape = () => {
  return (
    <Svg width={viewWidth + 10} height={barHeight} style={styles.barBackground}>
      <Path fill="#2d2f46" {...{ d }} />
    </Svg>
  );
};

const styles = StyleSheet.create({
  barBackground: {
    position: "absolute",

    margin: 0,
    padding: 0,

    bottom: 0,
    left: 0,

    backgroundColor: "transparent",

    elevation: 0,
    zIndex: 0,
  },
});

export default TabShape;
