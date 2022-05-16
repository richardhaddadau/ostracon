import faunadb from "faunadb";

const q = faunadb.query;
const {
  Select,
  Paginate,
  Create,
  Collection,
  Let,
  Lambda,
  Var,
  Exists,
  Match,
  Index,
  If,
} = q;

const CreateHashtags = (hashtags) => {
  return q.Map(
    hashtags,
    Lambda(
      ["hashtag"],
      Let(
        { match: Match(Index("hashtags_by_name"), Var("hashtag")) },
        If(
          Exists(Var("match")),
          Select(["data", 0], Paginate(Var("match"))),
          Select(
            ["ref"],
            Create(Collection("hashtags"), {
              data: { name: Var("hashtag") },
            })
          )
        )
      )
    )
  );
};

export { CreateHashtags };
