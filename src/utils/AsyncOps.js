import AsyncStorage from "@react-native-async-storage/async-storage";
// import { MMKV } from "react-native-mmkv";

// export const storage = new MMKV();

// Process Next Screen
const SignUpNext = (screen) => {
  const screenSchedule = {
    1: ["email", "password"],
    2: ["handle", "nickname"],
    3: ["dateOfBirth"],
    4: ["location"],
  };

  // const currentData = getMMKV("signup");

  console.log(`Screen: ${screen}`);
  console.log(getRegistrationData());
};

// MMKV Procedures
// const getMMKV = (key) => {
//   const strFrom = storage.getString(key);
//   const objFrom = JSON.parse(strFrom);
//
//   return objFrom;
// };
//
// const setMMKV = (key, valueObj) => {
//   if (!key || !valueObj) return undefined;
//
//   const strTo = JSON.stringify(valueObj);
//   storage.set(key, strTo);
//
//   return true;
// };

// AsyncStorage Procedures
const getRegistrationData = async () => {
  try {
    const registrationObject = AsyncStorage.getItem(
      "@current_registration_details"
    );

    return JSON.parse(await registrationObject);
  } catch (e) {
    // Error Reading
  }
};

const saveRegistrationData = async (registrationObject) => {
  try {
    await AsyncStorage.clear();
    const registrationString = JSON.stringify(registrationObject);
    await AsyncStorage.setItem(
      "@current_registration_details",
      registrationString
    );
  } catch (e) {
    // store nothing
  }
};

export { SignUpNext, getRegistrationData, saveRegistrationData };
