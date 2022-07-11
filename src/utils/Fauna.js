import faunadb from "faunadb";
import { FAUNA_SECRET } from "./AuthConstants";
import { cleanSecureStore, getSecureStore, setSecureStore } from "./AsyncOps";

const q = faunadb.query;

class Fauna {
  constructor(secret) {
    this.headers = {
      "content-type": "application/json",
    };
    this.domain = "db.fauna.com";
    this.port = 443;
    this.scheme = "https";

    // Client Config
    this.client = new faunadb.Client({
      headers: this.headers,
      domain: this.domain,
      port: this.port,
      scheme: this.scheme,
      secret: secret || FAUNA_SECRET,
    });
  }

  // Register
  Register = async (objRegistration) => {
    // Create Document in Accounts Collection
    // Create Document in Users Collection
  };

  // Login
  Login = async (username, password) => {
    // Check if a username and a password are passed
    if (!username || !password) return undefined;

    username = username.toLowerCase();

    // Check if Username is Email or Handle
    const checkIndex = username.includes("@")
      ? "accounts_by_email"
      : "accounts_by_handle";

    // Match details with Accounts Document
    await this.client
      .query(
        q.If(
          q.Identify(q.Match(q.Index(checkIndex), username), password),

          // if identity found, try to log in
          q.Let(
            {
              result: q.Login(q.Match(q.Index(checkIndex), username), {
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

          // if identity not found, return false
          false
        )
      )
      .then((res) => {
        if (res) {
          // Store Credentials in Expo
          res["savedPass"] = password;
          setSecureStore("savedAccount", res);

          this.client = new faunadb.Client({
            headers: this.headers,
            domain: this.domain,
            port: this.port,
            scheme: this.scheme,
            secret: res.secret,
          });

          console.log(res);
        }
      })
      .catch((e) => {
        console.log(e);
        cleanSecureStore("savedAccount");
        return false;
      });
  };

  // Logout
  Logout = async () => {
    // Logout Current User
    await this.client.query(q.Logout(true)).then((res) => {
      this.client = new faunadb.Client({
        headers: this.headers,
        domain: this.domain,
        port: this.port,
        scheme: this.scheme,
        secret: FAUNA_SECRET,
      });
    });
  };

  // Get Current User
  GetCurrentUser = async () => {
    // Temporary but unsafe method
    // const currentUser = await getSecureStore("savedAccount");
    // if (!currentUser["account"]) return false;
    //
    // await this.client
    //   .query(
    //     q.Get(
    //       q.Ref(q.Collection("users"), currentUser["account"]["user"]["id"])
    //     )
    //   )
    //   .then(() => {
    //     return true;
    //   })
    //   .catch(() => {
    //     cleanSecureStore("savedAccount");
    //     return false;
    //   });

    await this.client
      .query(q.HasCurrentIdentity())
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  // Get All Posts
  GetPosts = () => {
    // Return all posts paginated
  };

  // Get Post by Age
  GetPostsByAge = () => {};

  // Get Posts by User
  GetPostsByUser = () => {};

  // Get Post by Hashtag
  GetPostsByHashtag = () => {};

  // Get Posts by Group
  GetPostsByGroup = () => {};

  // Get Followers By User
  GetFollowersByUser = () => {};

  // Get Users Following By User
  GetFollowingByUser = () => {};

  // Praise User
  PraiseUser = () => {};

  // Get Trending Posts

  // Create Post
  CreatePost = () => {};

  // Edit Post
  EditPost = () => {};

  // Delete Post
  DeletePost = () => {};

  // Applaud Post
  ApplaudPost = () => {};

  // Comment on Post
  CommentPost = () => {};

  // Create Hashtag
  CreateHashtag = () => {};

  // Create Chapter
  CreateChapter = () => {};

  // Get All Chapters
  GetChapters = () => {};

  // Get Chapters by Member
  GetChaptersByMember = () => {};

  // Get Members in Chapter
  GetMembersInChapter = () => {};
}

const faunaDriver = new Fauna();
export { faunaDriver, Fauna };
