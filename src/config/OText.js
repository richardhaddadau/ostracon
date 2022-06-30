import React from "react";
import { Text } from "react-native";

const OText = (props) => {
  const processedText = [];
  const processText = (text, action, colour) => {
    // match all mentions and hashtags in text
    let tagList = props.children.match(/[@#][a-z0-9_\.]+/gi);

    // If text has no mentions or hashtags, return as is
    if (tagList == null) {
      return [text];
    }

    // add standard text, mentions and hashtags to our array as separate items
    for (const tag of tagList) {
      processedText.push(text.substring(0, text.indexOf(tag)));
    }

    return processedText;
  };
};

export default OText;
