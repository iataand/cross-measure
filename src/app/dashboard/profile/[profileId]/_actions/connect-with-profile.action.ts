"use server";

import { revalidatePath } from "next/cache";
import connectWithProfile from "~/data-access/connections/connect-with-profile";

export default async function connectWithProfileAction(
  authProfile: string,
  profileToConnect: string,
) {
  const res = await connectWithProfile(authProfile, profileToConnect);

  if (!res) {
    throw Error("Failed to establish connection");
  }

  revalidatePath("/dashboard");
}
