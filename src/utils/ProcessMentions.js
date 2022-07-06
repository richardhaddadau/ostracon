import React from "react";
import { Text } from "react-native";
import { useTheme } from "@ui-kitten/components";

export const ProcessMentions = (value, action = null) => {
  const processedText = [];
  let textCopy = value;

  const tagList = textCopy.match(/[@#][a-z0-9_\.]{2,}/gi);

  // if there are no mentions, just return the text
  if (tagList == null) {
    return textCopy;
  }

  // loop through all mentions
  for (const [index, tag] of tagList.entries()) {
    // add in any text before the next mention
    processedText.push(textCopy.substring(0, textCopy.indexOf(tag)));

    // add mention with styling and action
    processedText.push(
      <Tag text={tag} action={action} index={index} key={index} />
    );

    // reset Text
    textCopy = textCopy.substring(
      textCopy.indexOf(tag) + tag.length,
      textCopy.length
    );
  }

  // check if there's any text after the final tag
  if (textCopy.length > 0) {
    processedText.push(textCopy);
  }

  return processedText;
};

const Tag = (props) => {
  const theme = useTheme();

  return (
    <Text
      style={{ color: theme["color-secondary-default"] }}
      onPress={props.action}
      key={props.index + props.text}
    >
      {props.text}
    </Text>
  );
};
