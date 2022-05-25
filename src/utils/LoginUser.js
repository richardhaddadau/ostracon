// Import Database Data
import faunadb from "faunadb";

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

export const LoginUser = async (username, password) => {
  if (username === null) return undefined;

  if (username.includes("@")) {
    // Username is Email
    console.log("Try Again");

    await client.query(
      Map(Paginate(Match(Index("all_accounts"))), Lambda("x", Get(Var("x"))))
    );
  } else {
    // Username is Handle
  }
};
