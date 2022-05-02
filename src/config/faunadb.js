import React from "react";
import { FAUNA_OSTRACON_SECRET } from "@env";

const fauna = require("faunadb");
const q = fauna.query;

const client = new faundb.Client({
  secret: "fnAEkzcE5gACVHjVgPTF4HSF3fI2vW63cKgZI94H",
  domain: "db.fauna.com",
  port: 443,
  scheme: "https",
});

console.log(`Client: ${client}`);
