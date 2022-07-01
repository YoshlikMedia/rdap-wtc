import { wrapper } from "./wtc-cli/mod.ts";
import { client } from "./wtc-mysql/client.ts";

Deno.addSignalListener("SIGINT", async () => {
  await console.log("Closing Database Client...");
  await client.close();
  Deno.exit();
});

await wrapper();
