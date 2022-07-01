import { tcp } from "./tcp.ts";
import { http } from "./http.ts";

export const server = (keys: string[]) => {
  const modes = [];
  let TCP;
  let HTTP;

  if (keys.includes("--tcp")) {
    TCP = tcp();
    modes.push(TCP);
  }

  if (keys.includes("--http")) {
    HTTP = http();
    modes.push(HTTP);
  }

  if (modes.length === 0) {
    return console.error("No protocols were passed!");
  }

  if (modes) {
    return Promise.all(modes)
      .then(() => {});
  }
};
