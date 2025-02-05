import { QueryResult } from "pg";
import { db } from "~/db";
import { connections } from "~/db/schema";

export default async function connectWithProfile(
  authProfile: string,
  profileToConnect: string,
): Promise<QueryResult<never>> {
  const res = await db
    .insert(connections)
    .values({ firstProfile: authProfile, secondProfile: profileToConnect });

  if (!res) {
    throw Error("Failed to establish connection");
  }

  return res;
}
