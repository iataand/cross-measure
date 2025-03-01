"use server";

import { db } from "~/db";

export default async function getProfileByProfileId(profileId: string) {
  const profile = await db.query.bandProfileTable.findFirst({
    where: (profiles, { eq }) => eq(profiles.userId, profileId),
  });

  // if (!profile) {
  //   throw new Error(`No profile found for profileId: ${profileId}`);
  // }

  return profile;
}
