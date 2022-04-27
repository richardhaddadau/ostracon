import React from "react";
import { View, Text } from "react-native";

import {
  BOTTOM_NAVIGATION_FULL_HEIGHT,
  POST_MARGIN,
} from "../../constants/constants";

const PostFooter = () => {
  return (
    <View
      style={{
        height: BOTTOM_NAVIGATION_FULL_HEIGHT,
      }}
    >
      <Text style={{ fontStyle: "italic", textAlign: "center" }}>
        - This is the end -
      </Text>
    </View>
  );
};

export default PostFooter;
