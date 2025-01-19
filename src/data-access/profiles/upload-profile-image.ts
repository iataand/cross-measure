"use server";
import { eq } from "drizzle-orm";
import { db } from "~/db";
import { bandProfileTable } from "~/db/schema";

export default async function uploadProfileImage(
  profileImageUrl: string,
  profileId: number,
) {
  const res = await db
    .update(bandProfileTable)
    .set({ profileImageUrl: profileImageUrl })
    .where(eq(bandProfileTable.id, profileId));

  if (!res) {
    throw new Error("Could not update profile image.");
  }

  return res;
}
