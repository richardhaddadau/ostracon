import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar, View } from "react-native";

import checkForIdle from "../services/checkForIdle";

const CustomStatusBar = ({ backgroundColor, barStyle }) => {
  const insets = useSafeAreaInsets();

  checkForIdle();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

export default CustomStatusBar;
