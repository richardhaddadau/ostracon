// Import Database Data

const faunadb = require("faunadb");
const q = faunadb.query;
const { Map, Paginate, Match, Lambda, Get, Var, Documents, Index } = q;

const faunaSecret = "fnAEkzcE5gACVHjVgPTF4HSF3fI2vW63cKgZI94H";
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
