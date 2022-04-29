import React from "react";

// Import Navigation References
import { createNavigationContainerRef } from "@react-navigation/native";

const navigationRef = createNavigationContainerRef();

const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};

const currentScreen = () => {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute().name;
  }
};

export { navigationRef, navigate, goBack, currentScreen };
