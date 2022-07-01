import renderer from "../wtc-template/templates/renderer.ts";
import { getOne } from "../wtc-mysql/mod.ts";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export const handler = async (conn: Deno.Conn) => {
  // Parse message
  const buf = new Uint8Array(128);
  await conn.read(buf);

  // Accessing data
  const text: string = decoder.decode(buf.filter((entry) => entry !== 0));

  // Informing about request
  await console.log("[TCP] Request with param:", text);

  // Searching for data
  const content = await getOne(text);

  if (!content) {
    await conn.write(encoder.encode("No data found!"));
    return conn.close();
  }

  const encoded = encoder.encode(renderer(content));

  // Handle and close connection
  await conn.write(encoded);
  await conn.close();
};

export const tcp = async (port = 8080) => {
  const listener = Deno.listen({ port });

  // Showing output
  console.log(`[TCP] Listening on: 0.0.0.0:${port}`);

  for await (const conn of listener) {
    await handler(conn);
  }
};
