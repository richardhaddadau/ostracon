import React from "react";
import { TouchableWithoutFeedback, View, Text } from "react-native";
import { Menu, MenuItem } from "@ui-kitten/components";
import { Award } from "../Ostracon-Std";
import { POST_ICON_SIZE } from "../../constants/constants";

const PostMenu = () => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("Test");
        }}
      >
        <View></View>
      </TouchableWithoutFeedback>
      <Menu
        style={{
          position: "absolute",

          bottom: 0,
          padding: 15,
          paddingBottom: 70,

          width: "100%",

          backgroundColor: "white",
          borderRadius: 15,
        }}
      >
        <MenuItem title="Edit" />
        <MenuItem title="Delete" />
        <MenuItem
          title="Delete"
          accessoryLeft={() => <Award size={POST_ICON_SIZE} />}
        />
      </Menu>
    </View>
  );
};

export default PostMenu;
