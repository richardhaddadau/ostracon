import { getSecureStore, setSecureStore } from "./AsyncOps";

class Ostracon {
  RunSetup = async () => {
    const settingsObject = await getSecureStore("savedSettings");

    if (settingsObject === null) {
      await this.InitiateSettings();
    }
  };

  InitiateSettings = async () => {
    const newSettingsObject = {
      secureApp: false,
      securePin: "1234",
      secureTimeout: 0,
      allowSensitive: false,
      openDM: true,
      receiveNotifications: true,
    };

    await setSecureStore("savedSettings", newSettingsObject);
  };
}

const ostraconDriver = new Ostracon();
export { ostraconDriver };
