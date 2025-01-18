import "server-only";
import { db } from "~/db";
import { BandProfile } from "./create-band-profile";
import { eq } from "drizzle-orm";

export async function getProfileByEmail(
  email: string,
): Promise<BandProfile | undefined> {
  const bandProfile = await db.query.bandProfileTable.findFirst({
    where: (profiles, { eq }) => eq(profiles.email, email),
  });

  console.log(bandProfile);

  return bandProfile as BandProfile;
}
