import { eq } from "drizzle-orm";
import { db } from "~/db";
import { connections } from "~/db/schema";
import getAuthUid from "../get-auth-from-cookie";

export default async function getConnectionByProfilesId(
  secondProfileId: string,
): Promise<boolean> {
  const authProfileId = await getAuthUid();

  if (!authProfileId) {
    throw Error("User not authenticated");
  }

  const res = await db.query.connections.findFirst({
    where:
      eq(connections.firstProfile, authProfileId) &&
      eq(connections.secondProfile, secondProfileId),
  });

  if (!res) {
    throw Error("Failed fo fetch connection status");
  }

  return !!res;
}
