import { DefaultTheme } from "react-native-paper";
import { OSTRACON_ACCENT, OSTRACON_BADGE, OSTRACON_PRIMARY } from "./Colours";

export const OstraconTheme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: OSTRACON_PRIMARY,
    accent: OSTRACON_ACCENT,
    notification: OSTRACON_BADGE,
  },
};

export const OstraconDarkTheme = {
  ...DefaultTheme,
  dark: true,
  mode: "exact",
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: OSTRACON_PRIMARY,
    accent: OSTRACON_ACCENT,
    notification: OSTRACON_BADGE,
  },
};
