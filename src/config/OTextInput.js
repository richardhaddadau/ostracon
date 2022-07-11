import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import { useTheme } from "@ui-kitten/components";

const OTextInput = (props) => {
  console.log(props);
  // States
  const [currentText, setCurrentText] = useState("");

  const processText = (text, action, colour) => {
    const processedText = [];
    let textCopy = text;

    console.log(`Boom: ${text}`);

    let tagList = textCopy.value.match(/[@#][a-z0-9_\.)]{2,}/gi);

    if (tagList == null) {
      return textCopy;
    }

    for (const tag of tagList) {
      processedText.push(textCopy.substring(0, textCopy.indexOf(tag)));
      processedText.push();
      textCopy = textCopy.substring(
        textCopy.indexOf(tag) + tag.length,
        textCopy.length
      );
    }

    if (textCopy.length > 0) {
      processedText.push(textCopy);
    }

    return processedText;
  };

  return (
    <TextInput
      value={currentText}
      placeholder={props.placeholder}
      multiline={props.multiline}
      autoFocus={props.autoFocus}
      onChangeText={(value) => {
        setCurrentText(processText(props.value, props.action, props.colour));
      }}
      style={props.style}
    />
  );
};

const Tag = (props) => {
  // Theme
  const theme = useTheme();

  return (
    <Text
      style={{
        color: props.tagColour
          ? props.tagColour
          : theme["color-secondary-default"],
      }}
      onPress={null}
    >
      {props.text}
    </Text>
  );
};

export default OTextInput;
