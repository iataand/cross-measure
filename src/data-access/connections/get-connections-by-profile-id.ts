import { eq, or } from "drizzle-orm";
import { cache } from "react";
import { db } from "~/db";
import { connections } from "~/db/schema";
import getAuthUid from "../get-auth-from-cookie";
import { BandProfile } from "../profiles/create-band-profile";

export type ConnectionType = {
  id: number;
  secondProfile: string & BandProfile;
  firstProfile: string & BandProfile;
  isAccepted: boolean;
};

export const getConnections = cache(async (): Promise<any> => {
  const authProfileUid = await getAuthUid();

  if (!authProfileUid) {
    throw Error("User is not authenticated");
  }

  const res = await db.query.connections.findMany({
    with: { secondProfile: true, firstProfile: true },
    where: or(
      eq(connections.firstProfile, authProfileUid),
      eq(connections.secondProfile, authProfileUid),
    ),
  });

  const profiles = res.map((connection: ConnectionType) => {
    if (connection.firstProfile.userId === authProfileUid) {
      return connection.secondProfile;
    }

    if (connection.secondProfile.userId === authProfileUid) {
      return connection.firstProfile;
    }
  });

  return profiles;
});
