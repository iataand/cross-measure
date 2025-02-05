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
  profileImageUrl: string;
  currentProfileId: string;
};

export async function createBandProfile(
  bandProfile: BandProfile,
): Promise<void> {
  const res = await db.insert(bandProfileTable).values(bandProfile);
  if (!res) {
    throw Error("Failed to create profile");
  }
}
