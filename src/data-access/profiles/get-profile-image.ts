"use server";

import { db } from "~/db";
import { bandProfileTable } from "~/db/schema";
import { eq } from "drizzle-orm";

export default async function getProfileImage(
  profileId: string,
): Promise<{ profileImageUrl: string | null } | undefined> {
  const result = db.query.bandProfileTable.findFirst({
    columns: { profileImageUrl: true },
    where: eq(bandProfileTable.userId, profileId),
  });

  if (!result) {
    throw new Error("Profile Image not found.");
  }

  return result;
}
