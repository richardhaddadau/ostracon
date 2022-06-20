import faunadb, { Class } from "faunadb";

class Fauna {
  constructor(secret) {
    this.headers = {
      "content-type": "application/json",
    };
    this.client = new faunadb.Client({
      headers: this.headers,
      secret: secret,
    });
  }
}

const faunaDriver = new Fauna();

export { faunaDriver, Fauna };
