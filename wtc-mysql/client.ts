import { Database } from "../deps.ts";

export const client = await new Database().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "test",
  poolSize: 10,
  password: "test",
});
