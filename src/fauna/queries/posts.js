import faunadb from "faunadb";
import { flattenDataKeys } from "../helpers/util";
import { CreateHashtags } from "./hashtags";
import { AddRateLimiting } from "./rate-limiting";

const q = faunadb.query;
const {
  Call,
  Create,
  Collection,
  CurrentIdentity,
  Paginate,
  Documents,
  Lambda,
  Get,
  Var,
  Select,
  Let,
  Match,
  Index,
  Join,
  If,
  Exists,
  Update,
  Do,
  Add,
  Subtract,
  Not,
  Contains,
  Abort,
  Now,
} = q;

// Create a new post using a User Defind Function (UDF)
const CreatePost = (message, tags, asset) => {
  const FQLStatement = Let(
    {
      hashtagrefs: CreateHashtags(tags),
      newPost: Create(Collection("Posts"), {
        data: {
          message: message,
          author: Select(["data", "user"], Get(CurrentIdentity())),
          hashtags: Var("hashtagrefs"),
          asset: asset,
          applause: 0,
          attaches: 0,
          comments: 0,
          created: Now(),
        },
      }),
      postWithUserAndAccount: GetPostWithUsersMapGetGeneric([
        Select(["ref"], Var("newPost")),
      ]),
    },
    Var("postWithUserAndAccount")
  );

  return AddRateLimiting("create_post", FQLStatement, CurrentIdentity());
};

const ApplaudPost = (postRef) => {
  return Let(
    {
      account: Get(CurrentIdentity()),
      userRef: Select(["data", "user"], Var("account")),
      postStatisticsRef: Match(
        Index("poststats_by_user_and_post"),
        Var("userRef"),
        postRef
      ),
      post: Get(postRef),
      authorRef: Select(["data", "author"], Var("post")),
      followerStatisticsRef: Match(
        Index("followerstats_by_author_and_follower"),
        Var("authorRef"),
        Var("userRef")
      ),
      newApplaudStatus: If(
        Exists(Var("postStatisticsRef")),
        Not(Select(["data", "applause"], Get(Var("postStatisticsRef")))),
        true
      ),
      popularityGain: If(Var("newApplaudStatus"), 1, -1),
    },
    Do(
      If(
        Var("newApplaudStatus"),
        Update(postRef, {
          data: {
            applause: Subtract(Select(["data", "applause"], Var("post")), 1),
          },
        }),
        Update(postRef, {
          data: {
            applause: Subtract(Select(["data", "applause"], Var("post")), 1),
          },
        })
      ),
      If(
        Exists(Var("postStatisticsRef")),
        Update(Select(["ref"], Get(Var("postStatisticsRef"))), {
          data: {
            postApplause: Add(
              Select(
                ["data", "postApplause"],
                Get(Var("followerStatisticsRef"))
              ),
              Var("popularityGain")
            ),
          },
        }),
        true
      ),
      GetPostsWithUsersMapGetGeneric([postRef])
    )
  );
};
