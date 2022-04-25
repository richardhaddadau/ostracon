import React, { useState } from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

import { Avatar, Button, ButtonGroup, Divider } from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";

import {
  NEW_POST_MARGIN,
  NEW_POST_PADDING,
  POST_ICON_SIZE,
} from "../constants/constants";

import { STANDARD_SIZE } from "../theme/Fonts";
import { NewImage } from "../components/Ostracon-Std";

const PostNewScreen = () => {
  //   States
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [postEmpty, setPostEmpty] = useState(true);

  return (
    <View style={styles.newPostWrapper}>
      <Avatar
        size="small"
        shape="rounded"
        source={{ uri: "https://randomuser.me/api/portraits/men/73.jpg" }}
        style={{ marginBottom: 20 }}
      />
      <Divider />
      <View
        style={{
          flex: 1,
          marginBottom: 0,

          justifyContent: "space-between",
        }}
      >
        <TextInput
          style={styles.newPostInput}
          multiline
          autoFocus={true}
          placeholder="What do you want to share today?"
          value={postText}
          onChangeText={(value) => {
            setPostText(value);
            if (postText.length > 0) {
              setPostEmpty(false);
            } else {
              postImage === null ? setPostEmpty(true) : setPostEmpty(false);
            }
          }}
        />
        {postImage ? (
          <Image
            source={{ uri: postImage }}
            style={{ width: 300, height: 300, borderRadius: 10 }}
          />
        ) : null}
        <ButtonGroup
          style={{
            marginHorizontal: -NEW_POST_PADDING,
          }}
          appearance="ghost"
          size={"medium"}
        >
          <Button
            accessoryLeft={<NewImage size={POST_ICON_SIZE} />}
            onPress={async () => {
              let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });

              console.log(result);
              if (result.cancelled) {
                setPostImage(null);

                postText === "" ? setPostEmpty(true) : setPostEmpty(false);
              } else {
                setPostImage(result["uri"]);
                setPostEmpty(false);
              }
            }}
          />
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
  },
});

export default PostNewScreen;
