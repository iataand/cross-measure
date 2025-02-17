"use server";

import { eq } from "drizzle-orm";
import { db } from "~/db";
import { connections } from "~/db/schema";
import getAuthUid from "../get-auth-from-cookie";
import { auth } from "~/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export default async function getConnectionByProfilesId(
  secondProfileId: string,
): Promise<{ isAccepted: boolean } | undefined> {
  const authProfileId = await getAuthUid();

  // if (!authProfileId) {
  //   throw Error("User not authenticated");
  // }
  // const auth = getAuth();
  // console.log(auth);
  // const user = auth.currentUser;

  // const [user] = useAuthState(auth);

  const res = await db.query.connections.findFirst({
    columns: { isAccepted: true },
    where:
      eq(connections.firstProfile, authProfileId!) &&
      eq(connections.secondProfile, secondProfileId),
  });

  return res;
}
