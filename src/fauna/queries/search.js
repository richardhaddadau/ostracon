import faunadb from "faunadb";
import { flattenDataKeys } from "../helpers/util";

const q = faunadb.query;
const { Match, Paginate, Index, Lambda, Let, Var, Get } = q;

const searchPeopleAndTags = async (client, keyword) => {
  return client
    .query(
      Let(
        {
          setref: Match(
            Index("hashtags_and_users_by_wordparts"),
            keyword.toLowerCase()
          ),
          pages: Paginate(Var("setref"), { size: 10 }),
          references: q.Map(Var("pages"), Lambda(["user", "ref"], Var("ref"))),
        },
        q.Map(Var("references"), Lambda(["ref"], Get(Var("ref"))))
      )
    )
    .then((res) => {
      return flattenDataKeys(res);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export { searchPeopleAndTags };
