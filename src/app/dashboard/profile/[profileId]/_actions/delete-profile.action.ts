"use server";

import { db } from "~/db";
import { eq } from "drizzle-orm";
import { bandProfileTable } from "~/db/schema";

export default async function deleteProfileAction(
  profileId: string,
): Promise<{ deletedId: string }[]> {
  const deletedId = await db
    .delete(bandProfileTable)
    .where(eq(bandProfileTable.userId, profileId))
    .returning({ deletedId: bandProfileTable.userId });

  if (!deletedId) {
    throw Error("Something went wrong deleting your profile");
  }

  return deletedId;
}
