import React, { useState } from "react";
import { View } from "react-native";
import ScrollPicker from "react-native-wheel-scroll-picker";
import { useDrawerStatus } from "@react-navigation/drawer";

const DatePicker = () => {
  const [dayPicker, setDayPicker] = useState(1);
  return (
    <View>
      <ScrollPicker
        dataSource={[1, 2, 3, 4]}
        selectedIndex={1}
        onValueChange={(selectedIndex) => setDayPicker(selectedIndex)}
      />
    </View>
  );
};

export default DatePicker;
