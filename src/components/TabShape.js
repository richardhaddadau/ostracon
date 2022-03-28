import React, { useMemo } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";
import { curveBasis, line } from "d3-shape";

import {
  BOTTOM_NAVIGATION_BAR_HEIGHT,
  OSTRACON_BUTTON_SPACE,
} from "../theme/constants";

const { width: viewWidth } = Dimensions.get("window");
const navigationHeight = BOTTOM_NAVIGATION_BAR_HEIGHT;
const buttonSpace = OSTRACON_BUTTON_SPACE;

const shapePattern = line()
  .x(({ x }) => x)
  .y(({ y }) => y);

const TabShape = () => {
  // The Left and Right Sides will be ViewWidth - the Space for the button halved
  // Each Tab width will be either side halved
  const tabWidth = (viewWidth - buttonSpace) / 2 / 2;

  const d = useMemo(() => {
    const leftSide = shapePattern([
      { x: 0, y: 0 },
      { x: tabWidth * 2, y: 0 },
    ]);

    const rightSide = shapePattern([
      { x: viewWidth - tabWidth * 2, y: 0 },
      { x: viewWidth, y: 0 },
      { x: viewWidth, y: navigationHeight },
      { x: 0, y: navigationHeight },
      { x: 0, y: 0 },
    ]);

    const center = shapePattern.curve(curveBasis)([
      { x: (viewWidth - buttonSpace) / 2, y: 0 },
      { x: (viewWidth - buttonSpace) / 2 + 12, y: 0 },
      {
        x: (viewWidth - buttonSpace) / 2 + 10,
        y: navigationHeight * 0.3,
      },
      {
        x: (viewWidth - buttonSpace) / 2 + 28,
        y: navigationHeight * 0.565,
      },
      {
        x: viewWidth / 2,
        y: navigationHeight * 0.68,
      },
      {
        x: (viewWidth + buttonSpace) / 2 - 28,
        y: navigationHeight * 0.565,
      },
      {
        x: (viewWidth + buttonSpace) / 2 - 10,
        y: navigationHeight * 0.25,
      },
      { x: (viewWidth + buttonSpace) / 2 - 12, y: 0 },
      { x: (viewWidth + buttonSpace) / 2, y: 0 },
    ]);

    return `${leftSide} ${center} ${rightSide}z`;
  }, [tabWidth]);

  return (
    <Svg
      width={viewWidth}
      {...{ height: navigationHeight }}
      style={styles.barBackground}
    >
      <Path fill="#2d2f46" {...{ d }} />
    </Svg>
  );
};

const styles = StyleSheet.create({
  barBackground: {
    position: "absolute",
    bottom: 0,

    backgroundColor: "transparent",
  },
});

export default TabShape;
