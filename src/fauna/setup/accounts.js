import faunadb from "faunadb";

const q = faunadb.query;
const {
  Collection,
  CreateCollection,
  CreateIndex,
  Delete,
  Documents,
  Exists,
  If,
  Index,
  Lambda,
  Paginate,
  Var,
} = q;

// Collection Query
const CreateCollectionAccounts = CreateCollection({ name: "accounts" });

// Index Queries
// Index for All Accounts
const CreateIndexAllAccounts = CreateIndex({
  name: "all_accounts",
  source: Collection("accounts"),
  serialized: true,
});

// Index for Accounts by Email
const CreateIndexAccountsByEmail = CreateIndex({
  name: "accounts_by_email",
  source: Collection("accounts"),
  terms: [{ field: ["data", "email"] }],
  unique: true,
  serialized: true,
});

// Functions to Execute Queries
// Create Accounts Collection with Indexes
const createAccountCollection = async (client) => {
  await client.query(
    // If (condition, true, else)
    If(Exists(Collection("accounts")), true, CreateCollectionAccounts)
  );

  await client.query(
    If(Exists(Index("accounts_by_email")), true, CreateIndexAccountsByEmail)
  );

  await client.query(
    If(Exists(Index("all_accounts")), true, CreateIndexAllAccounts)
  );
};

const deleteAccountCollection = async (client) => {
  await client.query(
    If(Exists(Collection("accounts")), Delete(Collection("accounts")), true)
  );

  await client.query(
    If(
      Exists(Index("accounts_by_email")),
      Delete(Index("accounts_by_email")),
      true
    )
  );

  await client.query(
    If(Exists(Index("all_accounts")), Delete(Index("all_accounts")), true)
  );
};

// Delete All Accounts
const DeleteAllAccounts = If(
  // Check if Accounts Collection exists
  Exists(Collection("accounts")),

  // Map through each Document in the Collection
  q.Map(
    Paginate(Documents(Collection("accounts"))),

    // Lambda(param, function(param)) is equivalent to (param) => function(param)
    Lambda("ref", Delete(Var("ref")))
  ),
  true
);

export { createAccountCollection, deleteAccountCollection, DeleteAllAccounts };
