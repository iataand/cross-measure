import { eq, sql } from "drizzle-orm";
import { db } from "~/db";
import { bandProfileTable } from "~/db/schema";

export default async function connectWithProfile(
  authProfile: string,
  profileToConnect: string,
): Promise<any> {
  return;
}
