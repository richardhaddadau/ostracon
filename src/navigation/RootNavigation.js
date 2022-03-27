import React from "react";

import { createNavigationContainerRef } from "@react-navigation/native";

const navigationRef = createNavigationContainerRef();

const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const currentScreen = () => {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute().name;
  }
};

export { navigationRef, navigate, currentScreen };
