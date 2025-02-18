"use server";

import { revalidatePath } from "next/cache";
import connectWithProfile from "~/data-access/connections/connect-with-profile";
import getAuthUid from "~/data-access/get-auth-from-cookie";

export default async function connectWithProfileAction(
  profileToConnect: string,
) {
  const userData = await getAuthUid();

  if (!userData) {
    throw Error("User is not authenticated");
  }

  const res = await connectWithProfile(userData.user_id, profileToConnect);

  if (!res) {
    throw Error("Failed to establish connection");
  }

  revalidatePath("/dashboard");
}
