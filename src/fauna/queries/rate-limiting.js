import faunadb, { Lambda } from "faunadb";

const q = faunadb.query;
const {
  If,
  Epoch,
  Match,
  Index,
  Update,
  Collection,
  Let,
  Var,
  Paginate,
  Select,
  TimeDiff,
  Or,
  GTE,
  Abort,
  Create,
  IsEmpty,
  Count,
  LT,
  Do,
  Now,
  And,
  Not,
  Equals,
} = q;

const rateLimitingConfig = {
  get_posts: {
    calls: 5,
    perSeconds: 60 * 1000,
  },
  get_posts_by_tag: {
    calls: 5,
    perSeconds: 60 * 1000,
  },
  get_posts_by_author: {
    calls: 5,
    perSeconds: 60 * 1000,
  },
  create_post: {
    calls: 5,
    perSeconds: 300 * 1000, // One post per minute or 5 Calls per 5 Minutes (300 Seconds)
  },
  login: {
    calls: 3,
    perSeconds: 0,
  },
  // A global registration limit to help protect against bots creating many users
  register: {
    calls: 10,
    perSeconds: 10 * 1000,
  },
};

const getRateLimitingConfig = (action) => {
  const conf = rateLimitingConfig[action];
  if (conf) {
    return conf;
  } else {
    throw new Error(`No rate limiting configuration defined (or passed) for ${action}.
    Either define it in the config or pass it to the AddRateLimiting function`);
  }
};

const AddRateLimiting = (
  action,
  FqlQueryToExecute,
  Identifier,
  calls,
  perSeconds
) => {
  let conf = {};

  if (typeof calls !== "undefined" && typeof perSeconds !== "undefined") {
    conf.calls = calls;
    conf.perSeconds = perSeconds;
  } else {
    conf = getRateLimitingConfig(action);
  }

  return Let(
    {
      rateLimitingPage: Paginate(
        Match(Index("rate_limiting_by_action_and_identity"), action, Identifier)
      ),
    },
    If(
      IsEmpty(Var("rateLimitingPage")),
      Do(
        Create(Collection("rate_limiting"), {
          data: {
            action: action,
            identity: Identifier,
          },
        }),
        FqlQueryToExecute
      ),
      VerifyRateLimitingAndUpdate(
        action,
        conf.calls,
        conf.perSeconds,
        FqlQueryToExecute,
        Identifier
      )
    )
  );
};

const VerifyRateLimitingAndUpdate = (
  action,
  numberOfEvents,
  maxAgeInMs,
  FqlQueryToExecute,
  Identifier
) => {
  return Let(
    {
      eventsPage: Paginate(
        q.Events(Select(["data", 0], Var("rateLimitingPage"))),
        {
          size: numberOfEvents,
          before: null,
        }
      ),
      page: Select(["data"], Var("eventsPage")),
      firstEventOfPage: Select([0], Var("page")),
      timestamp: Select(["ts"], Var("firstEventOfPage")),
      time: Epoch(Var("timestamp"), "microseconds"),
      ageInMs: TimeDiff(Var("time"), Now(), "milliseconds"),
    },
    If(
      Or(
        LT(Count(Var("page")), numberOfEvents),
        And(Not(Equals(0, maxAgeInMs)), GTE(Var("ageInMs"), maxAgeInMs))
      ),
      Do(
        Update(Select(["document"], Var("firstEventOfPage")), {
          data: {
            action: action,
            identity: Identifier,
          },
        }),
        FqlQueryToExecute
      ),
      Abort("Rate limiting exceeded for this user/action")
    )
  );
};

export { AddRateLimiting };
