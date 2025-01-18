"use server";

import { getProfileByEmail } from "~/data-access/users/get-profile-by-email";

export async function getProfileByEmailAction(email: string) {
  return await getProfileByEmail(email);
}
