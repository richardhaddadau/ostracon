import faunadb from "faunadb";
import { FAUNA_SECRET } from "./AuthConstants";
import { cleanSecureStore, setSecureStore } from "./AsyncOps";

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
      secret: FAUNA_SECRET,
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

    // Check if Username is Email or Handle
    const checkIndex = username.includes("@")
      ? "accounts_by_email"
      : "accounts_by_handle";

    // Match details with Accounts Document
    await this.client
      .query(
        q.If(
          q.Identify(
            q.Match(q.Index(checkIndex), q.LowerCase(username)),
            password
          ),
          q.Let(
            {
              result: q.Login(
                q.Match(q.Index(checkIndex), q.LowerCase(username)),
                {
                  password: password,
                }
              ),
              account: q.Get(q.Select(["instance"], q.Var("result"))),
              secret: q.Select(["secret"], q.Var("result")),
            },
            {
              account: q.Var("account"),
              secret: q.Var("secret"),
            }
          ),
          false
        )
      )
      .then((res) => {
        // Store Credentials in Expo
        res["savedPass"] = password;
        setSecureStore("savedAccount", res);
      })
      .catch((e) => {
        console.log(e);
        cleanSecureStore("savedAccount");
        return false;
      });
  };

  // Logout
  Logout = () => {
    // Get Current User
    // Logout Current User
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
