import * as SecureStore from "expo-secure-store";

// Process Next Screen
const SignUpNext = async (screen, dataObject) => {
  let valid = true;
  let validArr = [];

  const screenSchedule = {
    1: ["email", "password"],
    2: ["handle", "nickname"],
    3: ["dateOfBirth"],
    4: ["location"],
  };

  // Using Object.assign to copy object
  const currentData = Object.assign({}, await getSecureStore("signup"));

  const onThisScreen = screenSchedule[screen];
  for (let x = 0; x < onThisScreen.length; x++) {
    let currentKey = screenSchedule[screen][x];

    if (currentKey === "email" && !dataObject[currentKey].includes("@")) {
      valid = false;
      validArr[x] = false;
      continue;
    }

    // low level validation
    if (dataObject[currentKey] === null) {
      valid = false;
      validArr[x] = false;
    } else {
      validArr[x] = true;
    }

    currentData[currentKey] = dataObject[currentKey];
  }

  if (valid) {
    await setSecureStore("signup", currentData);
    return true;
  } else {
    return validArr;
  }
};

const resetIsValid = () => {
  return [true, true];
};

// Expo Secure Store
const getSecureStore = async (key) => {
  try {
    const strFrom = await SecureStore.getItemAsync(key);
    return await JSON.parse(strFrom);
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

const setSecureStore = async (key, valueObj) => {
  if (!key || !valueObj) return undefined;

  const strTo = JSON.stringify(valueObj);

  try {
    await SecureStore.setItemAsync(key, strTo);
  } catch (e) {
    console.log(`Error: ${e}`);
  }

  return true;
};

const cleanSecureStore = (key) => {
  const freshObject = {
    email: "",
    password: "",
    handle: "",
    nickname: "",
    dateOfBirth: "",
    location: "",
  };

  setSecureStore(key, freshObject).then(() => true);
};

export {
  SignUpNext,
  getSecureStore,
  setSecureStore,
  cleanSecureStore,
  resetIsValid,
};
