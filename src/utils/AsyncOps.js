import AsyncStorage from "@react-native-async-storage/async-storage";

// Process Next Screen
const SignUpNext = (screen) => {
  const screenSchedule = {
    1: ["email", "password"],
    2: ["handle", "nickname"],
    3: ["dateOfBirth"],
    4: ["location"],
  };

  console.log(`Screen: ${screen}`);
  console.log(getRegistrationData());
};

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
