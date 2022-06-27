import React from "react";
import { Text } from "react-native";

const OText = (props) => {
  const processedText = [];
  const processText = (text, action, colour) => {
    let tagList = props.children.match(/[@#][a-z0-9_\.]+/gi);
    if (tagList == null) {
      return [text];
    }

    for (const tag of tagList) {
      processedText.push(text.substring(0, text.indexOf(tag)));
    }
  };
};
