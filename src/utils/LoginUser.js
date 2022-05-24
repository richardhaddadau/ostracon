// Import Database Data
import faunadb from "faunadb";
import { FAUNA_OSTRACON_SECRET } from "@env";

const q = faunadb.query;
const { Map, Paginate, Match, Lambda, Get, Var, Documents, Index } = q;

const faunaSecret = FAUNA_OSTRACON_SECRET;
const faunaDomain = "db.fauna.com";
const faunaPort = 443;
const faunaScheme = "https";

// Instantiate Fauna Client
const client = new faunadb.Client({
  secret: faunaSecret,
  domain: faunaDomain,
  port: faunaPort,
  scheme: faunaScheme,
});

export const LoginUser = (username, password) => {
  if (username === null) return undefined;

  if (username.includes("@")) {
    // Username is Email
    client
      .query(
        Map(Paginate(Match(Index("all_accounts"))), Lambda("X", Get(Var("X"))))
      )
      .then((result) => console.log(result));
  } else {
    // Username is Handle
  }
};
