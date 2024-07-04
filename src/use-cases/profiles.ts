import { CreateProfileInput, profileTypes } from "@/API";
import { createProfile } from "@/data-access/profiles";

export async function createProfileUseCase(
  profileId: string,
  type: profileTypes,
  bandName: string,
  firstName?: string,
  lastName?: string,
) {
  const profile = {} as CreateProfileInput;

  if (type === profileTypes.band) {
    profile.bandName = bandName;
  }

  if (type === profileTypes.musician) {
    profile.firstName = firstName;
    profile.lastName = lastName;
  }

  profile.type = type;
  profile.id = profileId;

  await createProfile(profile);
}
