import faunadb from "faunadb";
import { CreateUser } from "./users";
import { Follow } from "./followers";
import { AddRateLimiting } from "./rate-limiting";

const q = faunadb.query;
const {
  Paginate,
  If,
  IsEmpty,
  Call,
  Logout,
  Let,
  Var,
  Create,
  Collection,
  Select,
  Login,
  Match,
  Get,
  Index,
  CurrentIdentity,
  Identify,
  Do,
  Delete,
  ContainsStrRegex,
  Abort,
  GTE,
  Length,
} = q;

// Register
const registerNewUser = (
  email,
  password,
  nickname,
  handle,
  avatar,
  dateOfBirth,
  rateLimiting = true
) => {
  const ValidateEmail = (FqlStatement) => {
    // Validate Email
    if (
      ContainsStrRegex(
        email,
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
      )
    ) {
      FqlStatement;
    } else {
      Abort("Invalid e-mail provided");
    }
  };

  // Validate Password
  const ValidatePassword = (FqlStatement) => {
    if (GTE(Length(password), 8)) {
      FqlStatement;
    } else {
      Abort(
        "Invalid password, please provide a password with at least 8 characters"
      );
    }
  };

  //
  const RegisterFQLStatement = Let(
    {
      user: CreateUser(nickname, handle, avatar),
      account: Select(
        ["ref"],
        Create(Collection("accounts"), {
          credentials: { password: password },
          data: {
            email: email,
            user: Select(["ref"], Var("user")),
          },
        })
      ),
      secret: Login(Var("account"), { password: password }),
    },
    Do(
      // Follow Yourself
      Follow(Select(["ref"], Var("user")), Select(["ref"], Var("user"))),
      // then return user and account
      { user: Var("user"), account: Var("account"), secret: Var("secret") }
    )
  );

  // Add rate-limited
  return rateLimiting
    ? ValidatePassword(
        ValidateEmail(
          AddRateLimiting("register", RegisterFQLStatement, "global")
        )
      )
    : RegisterFQLStatement;
};
