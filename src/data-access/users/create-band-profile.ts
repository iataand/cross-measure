import "server-only";
import { db } from "~/db";
import { bandProfileTable } from "~/db/schema";

export type BandProfile = {
  id: number;
  bandName: string;
  bio: string;
  email: string;
  location: string;
  genres: string[];
};

export async function createBandProfile(
  bandProfile: BandProfile,
): Promise<void> {
  await db.insert(bandProfileTable).values(bandProfile);
}
