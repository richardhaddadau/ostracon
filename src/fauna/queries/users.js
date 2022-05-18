import faunadb from "faunadb";

const q = faunadb.query;
const { Create, Collection, Update, Let, Get, CurrentIdentity, Var, Select } =
  q;

const CreateUser = (nickname, handle, avatar) => {
  return Create(Collection("accounts"), {
    date: {
      nickname: nickname,
      handle: handle,
      avatar: avatar,
    },
  });
};

const UpdateUser = (nickname, handle, avatar) => {
  console.log("updating", nickname, handle, avatar);
  return Let(
    {
      accountRef: CurrentIdentity(),
      userRef: Select(["data", "account"], Get(Var("accountRef"))),
    },
    Update(Var("userRef"), {
      data: {
        nickname: nickname,
        handle: handle,
        avatar: avatar,
      },
    })
  );
};

export { CreateUser, UpdateUser };
