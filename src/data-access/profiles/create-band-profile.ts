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
    const res = await db.insert(bandProfileTable).values(bandProfile);
    console.log(res);
  } catch (e) {
    console.error(e);
  }
}
