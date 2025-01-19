"use server";

import { db } from "~/db";

export default async function getProfileByProfileId(profileId: number) {
  const profile = await db.query.bandProfileTable.findFirst({
    where: (profiles, { eq }) => eq(profiles.id, profileId),
  });

  if (!profile) {
    throw new Error(`No profile found for profileId: ${profileId}`);
  }

  return profile;
}
