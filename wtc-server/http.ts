import { HttpServer } from "../deps.ts";
import { getOne } from "../wtc-mysql/mod.ts";
import serialize from "../wtc-utils/serialize.ts";
import { Row } from "../wtc-mysql/types/Row.d.ts";

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  const param = url.searchParams.get("d");

  // Informing about request
  await console.log("[HTTP] Request with param:", param);

  if (param) {
    const data: Row = await getOne(param);
    return new Response(JSON.stringify(serialize(data)));
  }

  const data = JSON.stringify({
    message: 'param over d="ns.uz"',
    example: "http://localhost:8081?d=ns.uz",
  });
  return new Response(data);
};

export const http = async (port = 8081) => {
  // Showing output
  console.log(`[HTTP] Listening on: 0.0.0.0:${port}`);

  // Handle incoming requests
  await HttpServer(handler, { port });
};
