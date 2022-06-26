import faunadb, { Class } from "faunadb";

class Fauna {
  constructor(secret) {
    this.headers = {
      "content-type": "application/json",
    };

    // Client Config
    this.client = new faunadb.Client({
      headers: this.headers,
      secret: secret,
    });
  }

  // Register
  Register = async (objRegistration) => {
    // Create Document in Accounts Collection
    // Create Document in Users Collection
  };

  // Login
  Login = async (username, password) => {
    // Check if Username is Email or Handle
    // Match details with Accounts Document
    // Load User pertaining to Account
    // Store Credentials in Expo
  };

  // Logout
  Logout = () => {
    // Get Current User
    // Logout Current User
  };

  // Get All Posts
  GetPosts = () => {
    //
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
