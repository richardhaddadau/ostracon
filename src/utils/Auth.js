// Import Database Data
import faunadb from "faunadb";
import { getSecureStore, setSecureStore } from "./AsyncOps";
import { FAUNA_SECRET } from "./AuthConstants";

const q = faunadb.query;

const faunaSecret = FAUNA_SECRET;
const faunaDomain = "db.fauna.com";
const faunaPort = 443;
const faunaScheme = "https";

// Instantiate Fauna Client
const client = new faunadb.Client({
  secret: faunaSecret,
  domain: faunaDomain,
  port: faunaPort,
  scheme: faunaScheme,
  headers: {
    "content-type": "application/json",
  },
});

const AuthLogin = async (username, password) => {
  if (!username && !password) return undefined;

  if (username.includes("@")) {
    // Username is Email
    await client
      .query(
        q.If(
          q.Identify(
            q.Match(q.Index("accounts_by_email"), q.LowerCase(username)),
            password
          ),
          // If email and password match an account
          q.Let(
            {
              result: q.Login(q.Match(q.Index("accounts_by_email"), username), {
                password: password,
              }),
              account: q.Get(q.Select(["instance"], q.Var("result"))),
              secret: q.Select(["secret"], q.Var("result")),
            },
            {
              account: q.Var("account"),
              secret: q.Var("secret"),
            }
          ),
          // If email and password do not match an account
          false
        )
      )
      .then((res) => {
        res["savedPass"] = password;
        setSecureStore("savedAccount", res);
      })
      .catch((e) => {
        console.log(e);
        setSecureStore("savedAccount", null);
        return false;
      });
  } else {
    // Username is Handle
    await client
      .query(
        q.If(
          q.Identify(
            q.Match(q.Index("accounts_by_handle"), username),
            password
          ),
          // If handle and password match an account
          q.Let(
            {
              result: q.Login(
                q.Match(q.Index("accounts_by_handle"), username),
                { password: password }
              ),
              account: q.Get(q.Select(["instance"], q.Var("result"))),
              secret: q.Select(["secret"], q.Var("result")),
            },
            {
              account: q.Var("account"),
              secret: q.Var("secret"),
            }
          ),
          // If handle and password do not match an account
          false
        )
      )
      .then((res) => {
        res["savedPass"] = password;
        setSecureStore("savedAccount", res);
      })
      .catch((e) => {
        console.log(e);
        setSecureStore("savedAccount", null);
        return false;
      });
  }
};

const AuthRegister = async (registrationObj) => {
  // Create User
  const createUser = await client.query(
    q.Create(q.Collection("users"), {
      data: {
        nickname: registrationObj.nickname,
        dob: registrationObj.dateOfBirth,
        location: registrationObj.location,
        bio: "",
        followersCount: 0,
        followingCount: 0,
        postsCount: 0,
        verified: false,
        ostraconGold: false,
        monetised: false,
        private: false,
      },
    })
  );

  // Create Internal-Authentication Account
  await client
    .query(
      q.Create(q.Collection("accounts"), {
        credentials: { password: registrationObj.password },
        data: {
          email: registrationObj.email.toLowerCase(),
          handle: registrationObj.handle,
          user: q.Select(["ref"], createUser),
        },
      })
    )
    .then((r) => true)
    .catch((e) => console.log(e));
};

const AuthLogout = async () => {
  await client
    .query(q.Logout(true))
    .then((r) => console.log(r))
    .catch((e) => console.log(e));
};

const GetCurrentUser = async () => {
  await client
    .query(q.CurrentIdentity())
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};

const CheckIfUserExists = async (email, password) => {
  client
    .query(
      q.Identify(
        q.Match(q.Index("accounts_by_email"), q.LowerCase(email)),
        password
      )
    )
    .then((res) => res)
    .catch((e) => console.log(e));
};

export {
  AuthLogin,
  AuthRegister,
  AuthLogout,
  GetCurrentUser,
  CheckIfUserExists,
};
