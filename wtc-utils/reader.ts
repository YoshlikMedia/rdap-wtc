export default (method: string): string => {
  try {
    Deno.lstatSync(`./queries/${method}`);
    return Deno.readTextFileSync(`./queries/${method}.sql`);
  } catch (_) {
    throw new Error(`There is no script like ${method} at queries`);
  }
};
