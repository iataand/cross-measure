"use server";

import { getProfileByEmail } from "~/data-access/profiles/get-profile-by-email";

export async function getProfileByEmailAction(email: string) {
  try {
    return await getProfileByEmail(email);
  } catch (e) {
    console.error(e);
  }
}
