import { CreateProfileInput, Profile, profiles } from "@/API";
import { createProfile } from "@/data-access/profiles";

export async function createProfileUseCase(
  type: profiles,
  bandName: string,
  firstName?: string,
  lastName?: string
) {
  const profile = {} as CreateProfileInput;

  if (type === profiles.band) {
    profile.bandName = bandName;
  }

  if (type === profiles.musician) {
    profile.firstName = firstName;
    profile.lastName = lastName;
  }

  profile.type = type;

  await createProfile(profile);
}
