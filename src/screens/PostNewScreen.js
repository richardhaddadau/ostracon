import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Avatar, Button, ButtonGroup, Divider } from "@ui-kitten/components";

import {
  NEW_POST_MARGIN,
  NEW_POST_PADDING,
  POST_ICON_SIZE,
} from "../constants/constants";
import { STANDARD_SIZE } from "../theme/Fonts";
import { Attach, NewImage } from "../components/Ostracon-Std";

const PostNewScreen = () => {
  //   States
  const [postText, setPostText] = useState("");

  return (
    <View style={styles.newPostWrapper}>
      <Avatar
        size="small"
        shape="rounded"
        source={{ uri: "https://randomuser.me/api/portraits/men/73.jpg" }}
      />
      <Divider />
      <View style={{ marginBottom: 110 }}>
        <TextInput
          style={styles.newPostInput}
          multiline
          autoFocus={true}
          placeholder="What do you want to share today?"
          value={postText}
          onChangeText={(value) => setPostText(value)}
        />
        <ButtonGroup
          style={{ marginHorizontal: -NEW_POST_PADDING }}
          appearance="ghost"
          size={"medium"}
        >
          <Button accessoryLeft={<NewImage size={POST_ICON_SIZE} />} />
        </ButtonGroup>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newPostWrapper: {
    flex: 1,
    padding: NEW_POST_PADDING,

    backgroundColor: "white",
  },
  newPostInput: {
    marginTop: NEW_POST_MARGIN,
    marginLeft: -NEW_POST_PADDING,
    padding: NEW_POST_PADDING,

    backgroundColor: "white",

    fontSize: STANDARD_SIZE,

    borderWidth: 1,
  },
});

export default PostNewScreen;
