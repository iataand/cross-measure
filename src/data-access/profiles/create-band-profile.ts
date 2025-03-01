"use server";

import { db } from "~/db";
import { bandProfileTable, musicianProfileTable } from "~/db/schema";

export type BandProfile = {
  id: number;
  userId: string;
  bandName: string;
  bio: string;
  email: string;
  location: string;
  genres: string[] | null;
  profileImageUrl: string | null;
};

export async function createBandProfile(
  bandProfile: BandProfile,
): Promise<void> {
  const res = await db.insert(bandProfileTable).values(bandProfile);
  if (!res) {
    throw Error("Failed to create profile");
  }
}

export type MusicianProfile = {
  id: number;
  userId: string;
  musicianName: string;
  bio: string;
  email: string;
  location: string;
  genres: string[] | null;
  profileImageUrl: string | null;
};

export async function createMusicianProfile(
  musicianProfile: MusicianProfile,
): Promise<void> {
  const res = await db.insert(musicianProfileTable).values(musicianProfile);
  if (!res) {
    throw Error("Failed to create profile");
  }
}
