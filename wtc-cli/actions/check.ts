import { getOne } from "../../wtc-mysql/mod.ts";
import { close } from "../../wtc-utils/close.ts";
import renderer from "../../wtc-template/templates/renderer.ts";

export default async (domain: string) => {
  if (!domain || domain.length == 0) {
    return console.error("Nope");
  }

  await console.log(renderer(await getOne(domain)));
  await close(true);
};
