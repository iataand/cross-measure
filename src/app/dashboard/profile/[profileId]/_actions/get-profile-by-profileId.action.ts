"use server";

import { BandProfile } from "~/data-access/profiles/create-band-profile";
import getProfileByProfileId from "~/data-access/profiles/get-profile-by-profileId";

export async function getProfileByProfileIdAction(
  profileId: string,
): Promise<BandProfile> {
  const profile = await getProfileByProfileId(profileId);

  return profile as BandProfile;
}
