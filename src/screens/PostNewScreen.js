import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

import { goBack } from "../navigation/Member/RootNavigation";

import {
  Avatar,
  Button,
  ButtonGroup,
  Divider,
  useTheme,
} from "@ui-kitten/components";
import * as ImagePicker from "expo-image-picker";

import {
  ADD_IMAGE_ICON_SIZE,
  ADD_IMAGE_DELETE_SIZE,
} from "../constants/constants";

import { NEW_POST_MARGIN, NEW_POST_PADDING } from "../constants/constants";

import { INPUT_SIZE, STANDARD_SIZE } from "../theme/Fonts";
import { NewImage, Person } from "../components/Ostracon-Std";
import { Close as CloseActive } from "../components/Ostracon-Active";
import PostHeader from "../navigation/Member/PostHeader";

const PostNewScreen = () => {
  //   States
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [postEmpty, setPostEmpty] = useState(true);
  const [imageAspectRatio, setImageAspectRatio] = useState([1, 1]);

  const theme = useTheme();

  return (
    <View style={styles.fullScreenWrap}>
      <PostHeader
        headerTitle="New Post"
        GoBack={goBack}
        postText={postText}
        postImage={postImage}
      />
      <ScrollView style={styles.newPostWrapper}>
        <Avatar
          size="small"
          shape="rounded"
          source={{ uri: "https://randomuser.me/api/portraits/men/73.jpg" }}
          style={{ marginBottom: NEW_POST_PADDING }}
        />
        <Divider style={{ marginBottom: NEW_POST_PADDING }} />
        <View
          style={{
            flex: 1,
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
            <View>
              <Image
                source={{ uri: postImage }}
                style={{
                  marginBottom: NEW_POST_MARGIN,
                  width: "100%",
                  aspectRatio: imageAspectRatio[0] / imageAspectRatio[1],
                  borderRadius: 10,
                }}
              />
              <TouchableWithoutFeedback onPress={() => setPostImage(null)}>
                <View
                  style={{
                    position: "absolute",
                    margin: NEW_POST_PADDING,
                    right: 0,
                  }}
                >
                  <CloseActive size={ADD_IMAGE_DELETE_SIZE} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          ) : null}
        </View>
      </ScrollView>
      {postImage ? null : (
        <ButtonGroup
          style={{
            backgroundColor: "white",
            borderWidth: 0,
          }}
          appearance="ghost"
          size="medium"
        >
          <Button
            accessoryLeft={
              <NewImage
                size={ADD_IMAGE_ICON_SIZE}
                color={theme["color-primary-500"]}
              />
            }
            onPress={async () => {
              let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                quality: undefined,
              });

              if (result.cancelled) {
                await setPostImage(null);

                postText === "" ? setPostEmpty(true) : setPostEmpty(false);
              } else {
                await setPostImage(result["uri"]);

                await setImageAspectRatio([result["width"], result["height"]]);

                setPostEmpty(false);
              }
            }}
          />
        </ButtonGroup>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenWrap: {
    flex: 1,
    justifyContent: "space-between",
  },
  newPostWrapper: {
    flex: 1,

    padding: NEW_POST_PADDING,

    backgroundColor: "white",
  },
  newPostInput: {
    padding: NEW_POST_PADDING,
    paddingLeft: 0,

    backgroundColor: "white",

    fontSize: INPUT_SIZE,
  },
});

export default PostNewScreen;
