import { OSTRACON_ACCENT, OSTRACON_BADGE, OSTRACON_PRIMARY } from "./Colours";

export const OstraconTheme = {
  dark: false,
  roundness: 2,
  colors: {
    primary: OSTRACON_PRIMARY,
    accent: OSTRACON_ACCENT,
    notification: OSTRACON_BADGE,
  },
};

export const OstraconDarkTheme = {
  dark: true,
  mode: "exact",
  roundness: 2,
  colors: {
    primary: OSTRACON_PRIMARY,
    accent: OSTRACON_ACCENT,
    notification: OSTRACON_BADGE,
  },
};
