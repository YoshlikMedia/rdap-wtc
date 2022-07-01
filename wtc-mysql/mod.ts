import { client } from "./client.ts";
import type { Row } from "./types/Row.d.ts";
import reader from "../wtc-utils/reader.ts";
import vartostring from "../wtc-utils/vartostring.ts";

export const getAll = async (): Promise<Row[]> => {
  const { rows } = await client.execute(reader(vartostring(getAll)));
  return rows as Row[];
};

export const getOne = async (name: string): Promise<Row> => {
  const { rows } = await client.execute(reader(vartostring(getOne)), [
    "t1.sName",
    name.trim().replaceAll("\n", ""),
  ]);
  return rows![0] as Row;
};
