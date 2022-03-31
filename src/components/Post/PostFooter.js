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
        marginVertical: POST_MARGIN * 2,
        height: BOTTOM_NAVIGATION_FULL_HEIGHT,
      }}
    >
      <Text>You've reached the end</Text>
    </View>
  );
};

export default PostFooter;
