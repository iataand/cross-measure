"use server";
import { db } from "~/db";
import { bandProfileTable } from "~/db/schema";

export type BandProfile = {
  id: number;
  userId: string;
  bandName: string;
  bio: string;
  email: string;
  location: string;
  genres: string[];
};

export async function createBandProfile(
  bandProfile: BandProfile,
): Promise<void> {
  try {
    await db.insert(bandProfileTable).values(bandProfile);
  } catch (e) {
    console.error(e);
  }
}
