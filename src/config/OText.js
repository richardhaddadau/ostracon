import React from "react";
import { Text } from "react-native";
import { useTheme } from "@ui-kitten/components";

const OText = (props) => {
  const processText = (text, action, colour) => {
    const processedText = [];
    let textCopy = text;

    // find all mentions and hashtags in text
    let tagList = props.children.match(/[@#][a-z0-9_\.]{2,}/gi);

    // if text has no mentions or hashtags, return as is
    if (tagList == null) {
      return [textCopy];
    }

    // if text has mentions and/or hashtags, process further
    for (const tag of tagList) {
      processedText.push(textCopy.substring(0, textCopy.indexOf(tag)));
      processedText.push(
        <Tag tagColour={colour} tagAction={action} text={tag} />
      );
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
    <Text
      style={props.style}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
    >
      {processText(props.children, props.action, props.colour)}
    </Text>
  );
};

const Tag = (props) => {
  const theme = useTheme();

  return (
    <Text
      style={{
        color: props.tagColour
          ? props.tagColour
          : theme["color-secondary-default"],
      }}
      onPress={() => {
        if (props.tagAction) {
          props.tagAction(props.text);
        }
      }}
    >
      {props.text}
    </Text>
  );
};

export default OText;
