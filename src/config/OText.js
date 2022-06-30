import React from "react";
import { Text } from "react-native";
import { useTheme } from "@ui-kitten/components";

const OText = (props) => {
  const processText = (text, action, colour) => {
    const processedText = [];
    const textCopy = text;

    // find all mentions and hashtags in text
    let tagList = props.children.match(/[@#][a-z0-9_\.]+/gi);

    // if text has no mentions or hashtags, return as is
    if (tagList == null) {
      return [textCopy];
    }

    // if text has mentions and/or hashtags, process further
    for (const tag of tagList) {
      processedText.push(text.substring(0, text.indexOf(tag)));
      processedText.push(
        <Tag tagColour={colour} tagAction={action} text={tag} />
      );
      text = text.substring(text.indexOf(tag) + tag.length, text.length);
    }

    if (text.length > 0) {
      processedText.push(text);
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
