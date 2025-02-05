import { eq } from "drizzle-orm";
import { db } from "~/db";
import { connections } from "~/db/schema";

export default async function getConnectionByProfilesId(
  authProfileId: string,
  secondProfileId: string,
): Promise<boolean> {
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
