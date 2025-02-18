import { eq, or } from "drizzle-orm";
import { cache } from "react";
import { db } from "~/db";
import { connections } from "~/db/schema";
import getAuthUid from "../get-auth-from-cookie";
import { BandProfile } from "../profiles/create-band-profile";

export type ConnectionType = {
  id: number;
  secondProfile: BandProfile;
  firstProfile: BandProfile;
  isAccepted: boolean;
};

export const getConnections = cache(
  async (): Promise<
    { profile: BandProfile; id: number; isAccepted: boolean }[]
  > => {
    const currentUser = await getAuthUid();

    if (!currentUser?.user_id) {
      throw Error("User is not authenticated");
    }

    const res = await db.query.connections.findMany({
      with: { secondProfile: true, firstProfile: true },
      where: or(
        eq(connections.firstProfile, currentUser.user_id),
        eq(connections.secondProfile, currentUser.user_id),
      ),
    });

    const profiles = res.map((connection) => {
      return {
        profile:
          connection.firstProfile.userId === currentUser.user_id
            ? connection.firstProfile
            : connection.secondProfile,
        id: connection.id,
        isAccepted: connection.isAccepted,
      };
    });

    return profiles;
  },
);
