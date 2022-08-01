import { cleanSecureStore, getSecureStore, setSecureStore } from "./AsyncOps";

class Ostracon {
  RunSetup = async () => {
    const settingsObject = await getSecureStore("savedSettings");

    if (!settingsObject) {
      console.log("found null");
      await this.InitiateSettings();
    }
  };

  InitiateSettings = async () => {
    const newSettingsObject = {
      showDOB: true,
      secureApp: false,
      securePin: "",
      secureTimeout: 0,
      allowSensitive: false,
      openDM: true,
      receiveNotifications: true,
    };

    await setSecureStore("savedSettings", newSettingsObject);
  };

  ChangeSettings = async (settingKey, settingValue) => {
    const newSettingsObject = await getSecureStore("savedSettings");
    newSettingsObject[settingKey] = settingValue;

    await setSecureStore("savedSettings", newSettingsObject);
  };
}

const ostraconDriver = new Ostracon();
export { ostraconDriver, Ostracon };
