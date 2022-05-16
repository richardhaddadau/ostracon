import faunadb from "faunadb";
import { flattenDataKeys } from "../helpers/util";

const q = faunadb.query;
const { Call, Create, Collection, Var, Let } = q;

// Create Follower
const Follow = (authorRef, accountRef) => {
  return Let(
    {
      followerstats: Create(Collection("followerstats"), {
        data: {
          postApplause: 0,
          postAttaches: 0,
          author: authorRef,
          responder: accountRef,
        },
      }),
    },
    Var("followerstats")
  );
};

//
const follow = (client, authorRef) => {
  return client
    .query(Call(q.Function("follow"), authorRef))
    .then((res) => flattenDataKeys(res));
};

export { Follow, follow };
