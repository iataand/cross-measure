"use server";

import { db } from "~/db";
import { bandProfileTable } from "~/db/schema";
import { BandProfile } from "./create-band-profile";
import { eq } from "drizzle-orm";

export async function editBandProfile(
  bandProfile: BandProfile,
  profileId: string,
): Promise<void> {
  try {
    const res = await db
      .update(bandProfileTable)
      .set(bandProfile)
      .where(eq(bandProfileTable.userId, profileId));
  } catch (e) {
    console.error(e);
  }
}
