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

export const getConnections = cache(
  async (): Promise<{ profile: BandProfile; id: number }[]> => {
    const userData = await getAuthUid();

    if (!userData) {
      throw Error("User is not authenticated");
    }

    const res = await db.query.connections.findMany({
      with: { secondProfile: true, firstProfile: true },
      where: or(
        eq(connections.firstProfile, userData.user_id),
        eq(connections.secondProfile, userData.user_id),
      ),
    });

    const profiles = res.map((connection: ConnectionType) => {
      if (connection.firstProfile.userId === userData.user_id) {
        return {
          profile: connection.secondProfile,
          id: connection.id,
        };
      }

      return {
        profile: connection.firstProfile,
        id: connection.id,
      };
    });

    return profiles;
  },
);
