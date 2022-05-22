import faunadb from "faunadb";

const q = faunadb.query;
const { CreateCollection, CreateIndex, Collection } = q;

const CreateCollectionComments = CreateCollection({ name: "comments" });

const CreateIndexCommentsByPostOrdered = CreateIndex({
  name: "comments_by_post_ordered",
  source: Collection("comments"),
  terms: [
    {
      field: ["data", "post"],
    },
  ],
  values: [{ field: ["ts"] }, { field: ["ref"] }],
  serialized: true,
});
