import { openDatabase } from "react-native-sqlite-storage";

const getConnection = async () => {
  return openDatabase({ name: "settings-data.db", location: "default" });
};
