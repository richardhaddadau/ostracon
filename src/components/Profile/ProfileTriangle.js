import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

// Import Shaping Libraries
import { Svg, Path } from "react-native-svg";
import { line } from "d3-shape";

// Import Theme
import { useTheme } from "@ui-kitten/components";

const { width: viewWidth } = Dimensions.get("screen");
const headerHeight = 110;

const shapePattern = line()
  .x(({ x }) => x)
  .y(({ y }) => y);

const triangleHead = shapePattern([
  { x: viewWidth + 5, y: 0 },
  { x: viewWidth + 5, y: headerHeight },
  { x: -5, y: headerHeight },
  { x: -5, y: headerHeight - 10 },
]);

const d = `${triangleHead}`;

const ProfileTriangle = () => {
  const theme = useTheme();

  return (
    <Svg width={viewWidth + 10} height={headerHeight} style={styles.header}>
      <Path fill={theme["color-bar-surface"]} {...{ d }} />
    </Svg>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",

    top: 75,
    left: 0,
  },
});

export default ProfileTriangle;
