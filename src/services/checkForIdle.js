import { AppState } from "react-native";

let lastTime = 0;
let lastState = "";

const checkForIdle = () => {
  AppState.addEventListener("change", (nextState) => {
    if (lastState !== nextState) {
      lastState = nextState;
    }

    if (lastState === "active") {
      let timeAway = Math.floor((Date.now() - lastTime) / 1000);
      console.log(`Difference: ${timeAway}`);
    } else {
      lastTime = Date.now();
      console.log(`Background: ${lastTime}`);
    }
  });

  AppState.removeEventListener("change", null);
};

export default checkForIdle;
