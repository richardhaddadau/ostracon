import AsyncStorage from "@react-native-async-storage/async-storage";

// AsyncStorage Procedures
const getRegistrationData = async () => {
  const screenSchedule = {
    1: ["email", "password"],
    2: ["handle", "nickname"],
    3: ["dateOfBirth"],
    4: ["location"],
  };

  try {
    const registrationObject = await AsyncStorage.getItem(
      "@current_registration_details"
    );

    // console.log(registrationObject[screenSchedule]);
    // console.log(JSON.parse(registrationObject));

    return registrationObject != null ? JSON.parse(registrationObject) : false;
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

export { getRegistrationData, saveRegistrationData };
