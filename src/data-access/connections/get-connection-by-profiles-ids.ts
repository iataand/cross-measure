"use server";

import { eq } from "drizzle-orm";
import { db } from "~/db";
import { connections } from "~/db/schema";
import getAuthUid from "../get-auth-from-cookie";

export default async function getConnectionByProfilesId(
  secondProfileId: string,
): Promise<{ isAccepted: boolean } | undefined> {
  const userData = await getAuthUid();

  if (!userData) {
    // throw Error("User not authenticated");
    return;
  }
  // const auth = getAuth();
  // console.log(auth);
  // const user = auth.currentUser;

  // const [user] = useAuthState(auth);

  const res = await db.query.connections.findFirst({
    columns: { isAccepted: true },
    where:
      eq(connections.firstProfile, userData.user_id) &&
      eq(connections.secondProfile, secondProfileId),
  });

  return res;
}
