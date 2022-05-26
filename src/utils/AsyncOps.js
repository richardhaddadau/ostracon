import * as SecureStore from "expo-secure-store";

// Process Next Screen
const SignUpNext = (screen) => {
  const screenSchedule = {
    1: ["email", "password"],
    2: ["handle", "nickname"],
    3: ["dateOfBirth"],
    4: ["location"],
  };

  const currentData = getSecureStore("signup");

  console.log(`Screen: ${screen}`);
  // console.log(getRegistrationData());
};

// Expo Secure Store
const getSecureStore = async (key) => {
  const strFrom = await SecureStore.getItemAsync(key);
  return JSON.parse(strFrom);
};

const setSecureStore = async (key, valueObj) => {
  if (!key || !valueObj) return undefined;

  const strTo = JSON.stringify(valueObj);
  await SecureStore.setItemAsync(key, strTo);

  return true;
};

export { SignUpNext, getSecureStore, setSecureStore };
