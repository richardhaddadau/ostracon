import React from "react";

// CometChat
import { CometChat } from "@cometchat-pro/react-native-chat";

const appID = "206255ce1f170832";
const region = "US";
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion()
  .build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
  },
  (error) => {
    console.log("Initialization failed with error: ", error);
  }
);
