import { openDatabase } from "react-native-sqlite-storage";

export const getConnection = async () => {
  return openDatabase({ name: "settings-data.db", location: "default" });
};

export const createTable = async (db) => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(value TEXT NOT NULL);`;

  await db.executeSql(query);
};
