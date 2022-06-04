// Import Database Data
import faunadb, { Collection, Create } from "faunadb";

const q = faunadb.query;
const { Map, Paginate, Match, Lambda, Get, Var, Documents, Index } = q;

const faunaSecret = "fnAEnxdW8sACU2tkeieaUlbAv1hcZouhAZ3IlnW7";
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
    'content-type': 'application/json'
  }
});

const AuthLogin = async (username, password) => {
  if (!username && !password) return undefined;

  if (username.includes("@")) {
    // Username is Email
    await client
      .query(q.Map(
        Paginate(Match(Index("accounts_by_email"), username)),
        Lambda("x", Get(Var("x")))
      ))
      .then((r) => {
        r.data.length > 0 ? console.log(r.data[0].data) : null;
      })
      .catch((e) => {
        console.log(e);
      }
      )
  } else {
    // Username is Handle
  }
};

const AuthRegister = (registrationObj) => {
  console.log(registrationObj);

  let registerQuery = client.query(
    q.Create(q.Collection("accounts"), {
      data: {
        email: registrationObj.email,
        handle: registrationObj,
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
      },
      credentials: {
        password: registrationObj.password,
      },
    })
  );

  registerQuery.then((r) => console.log(r.ref));
};

export { AuthLogin, AuthRegister };
