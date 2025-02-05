import { eq } from "drizzle-orm";
import { cache } from "react";
import { db } from "~/db";
import { connections } from "~/db/schema";
import getAuthUid from "../get-auth-from-cookie";

export type ConnectionType = {
  id: number;
  firstProfile: string & {
    id: number;
    userId: string;
    bandName: string;
    bio: string;
    email: string;
    location: string;
    genres: string[] | null;
    profileImageUrl: string | null;
  };
  isAccepted: boolean;
};

export const getConnections = cache(async (): Promise<ConnectionType[]> => {
  const authProfileUid = await getAuthUid();

  if (!authProfileUid) {
    throw Error("User is not authenticated");
  }

  const res = await db.query.connections.findMany({
    with: { firstProfile: true },
    where: eq(connections.firstProfile, authProfileUid),
  });

  return res;
});
