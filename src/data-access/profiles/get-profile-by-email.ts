"use server";
import { db } from "~/db";
import { BandProfile } from "./create-band-profile";

export async function getProfileByEmail(
  email: string,
): Promise<BandProfile | undefined> {
  const bandProfile = await db.query.bandProfileTable.findFirst({
    where: (profiles, { eq }) => eq(profiles.email, email),
  });

  if (!bandProfile) {
    throw new Error(`No profile found for email: ${email}`);
  }

  return bandProfile as BandProfile;
}
