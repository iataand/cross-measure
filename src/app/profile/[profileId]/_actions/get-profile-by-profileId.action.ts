"use server";

import getProfileByProfileId from "~/data-access/profiles/get-profile-by-profileId";

export async function getProfileByProfileIdAction(profileId: string) {
  const profile = await getProfileByProfileId(profileId);

  return profile;
}
