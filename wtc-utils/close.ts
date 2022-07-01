import { client } from "../wtc-mysql/client.ts";

export const close = async (exit = false) => {
  await client.close();
  if (exit) Deno.exit(0);
};
