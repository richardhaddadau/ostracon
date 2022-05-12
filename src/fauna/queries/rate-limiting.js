import faunadb, { Lambda } from "faunadb";

const q = faunadb.query;
const {
  Documents,
  CreateCollection,
  CreateIndex,
  Collection,
  Exists,
  If,
  Index,
  Delete,
  Lambda,
  Paginate,
  Var,
} = q;

// Collection
const CreateRateLimitingCollection = CreateCollection({
  name: "rate_limiting",
});

// Indexes
const CreateIndexAllRateLimiting = CreateIndex({
  name: "all_rate_limiting",
  source: Collection("rate_limiting"),
  serialized: true,
});

const CreateIndexRateLimitingByActionAndIdentity = CreateIndex({
  name: "rate_limiting_by_action_and_identity",
  source: Collection("rate_limiting"),
  terms: [
    {
      field: ["data", "action"],
    },
    {
      field: ["data", "identity"],
    },
  ],
  serialized: true,
});

const createRateLimitingCollection = async (client) => {
  await client.query(
    If(Exists(Collection("rate_limiting")), true, CreateRateLimitingCollection)
  );
  await client.query(
    If(Exists(Index("all_rate_limiting")), true, CreateIndexAllRateLimiting)
  );
  await client.query(
    If(Exists(Index("")), true, CreateIndexRateLimitingByActionAndIdentity)
  );
};

const deleteRateLimitingCollection = async (client) => {
  await client.query(
    If(
      Exists(Collection("rate_limiting")),
      true,
      Delete(Collection("rate_limiting"))
    )
  );
  await client.query(
    If(Exists(Index("")), true, Delete(Index("all_rate_limiting")))
  );
  await client.query(
    If(
      Exists(Index("rate_limiting_by_action_and_identity")),
      true,
      Delete(Index("rate_limiting_by_action_and_identity"))
    )
  );
};

const DeleteAllRateLimiting = If(
  Exists(Collection("rate_limiting")),
  q.Map(
    Paginate(Documents(Collection("rate_limiting"))),
    Lambda("ref", Delete(Var("ref")))
  ),
  true
);

export {
  createRateLimitingCollection,
  deleteRateLimitingCollection,
  CreateIndexAllRateLimiting,
  DeleteAllRateLimiting,
};
