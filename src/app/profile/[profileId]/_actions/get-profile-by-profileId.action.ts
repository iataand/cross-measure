"use server";

import getProfileByProfileId from "~/data-access/profiles/get-profile-by-profileId";

export async function getProfileByProfileIdAction(profileId: number) {
  const profile = await getProfileByProfileId(profileId);

  return profile;
}
