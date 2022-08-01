import faunadb, { Now } from "faunadb";
import { FAUNA_SECRET } from "./AuthConstants";
import { cleanSecureStore, getSecureStore, setSecureStore } from "./AsyncOps";

const q = faunadb.query;
// (async function () {
//   const savedAccount = await getSecureStore("savedAccount");
//   const savedPass = savedAccount["secret"];
// })();

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

  // Try For Token
  TryForToken = async () => {
    const savedAccount = await getSecureStore("savedAccount");

    const savedPass = savedAccount !== null ? savedAccount["secret"] : null;

    if (savedPass) {
      this.client = new faunadb.Client({
        headers: this.headers,
        domain: this.domain,
        port: this.port,
        scheme: this.scheme,
        secret: savedPass,
      });
    }
  };

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

          return res;
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
    await this.TryForToken();

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

    const settingsObject = await getSecureStore("savedSettings");
    console.log(settingsObject);
    // settingsObject["secureApp"] = false;
    await setSecureStore("settingsSecureApp", settingsObject);
  };

  // Get Current User
  GetCurrentUser = async () => {
    await this.TryForToken();

    await this.client
      .query(q.CurrentIdentity())
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  // Get All Users
  GetUsers = async () => {
    await this.TryForToken();

    // Return data object of all users
    await this.client
      .query(q.Paginate(q.Documents(q.Collection("accounts"))))
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  // Get All Posts
  GetPosts = async () => {
    await this.TryForToken();

    // Return all posts paginated
    await this.client
      .query(q.Paginate(q.Match(q.Index("all_posts"))))
      .then((res) => {
        console.log(res);
        for (const post of res["data"]) {
          const postId = post["id"];

          let postObject = {};

          this.client
            .query(q.Get(q.Ref(q.Collection("posts"), postId)))
            .then((postRes) => {
              console.log(postRes);

              postObject = {
                handle: postRes["data"],
                username: postRes["data"],
                posted: postRes["data"]["created"]["ts"],
                content: postRes["data"]["content"],
                postApplause: postRes["data"],
                postAttaches: postRes["data"],
                postComments: postRes["data"],
                postPraises: postRes["data"],
              };
            });
        }
      });
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
  CreatePost = async (postObject) => {
    if (!postObject) return false;

    await this.TryForToken();

    // author will come from CurrentIdentity
    postObject["author"] = "test";
    postObject["created"] = Now();

    await this.client
      .query(
        q.Create(q.Collection("posts"), {
          data: {
            author: postObject["author"],
            content: postObject["content"],
            chapter: postObject["chapter"],
            commentsAllowed: postObject["commentsAllowed"],
            private: postObject["private"],
            postApplause: postObject["postApplause"],
            postAttaches: postObject["postAttached"],
            postComments: postObject["postComments"],
            postHashtags: postObject["postHashtags"],
            created: q.Now(),
          },
        })
      )
      .then((res) => true)
      .catch((e) => false);
  };

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
