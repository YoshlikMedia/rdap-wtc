import parse from "./parse.ts";
import help from "./actions/help.ts";
import check from "./actions/check.ts";
import { server } from "../wtc-server/mod.ts";

export const wrapper = async () => {
  const parsed = await parse(Deno.args);
  const keys = Object.keys(parsed);

  if (
    keys.includes("--help") ||
    keys.includes("-h") ||
    keys.length == 0
  ) {
    return help();
  }

  if (keys.includes("--server") || keys.includes("-s")) {
    return server(keys);
  }

  if (keys.includes("--domain") || keys.includes("-d")) {
    if (parsed["--domain"]) {
      return await check(parsed["--domain"]);
    } else if (parsed["-d"]) {
      return await check(parsed["-d"]);
    } else {
      return console.error("Invalid argument for domain");
    }
  }

  console.log("Invalid command");
};
