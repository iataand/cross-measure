"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "~/db";
import { connections } from "~/db/schema";

export default async function deleteConnectionAction(id: number) {
  try {
    await db.delete(connections).where(eq(connections.id, id));
  } catch (err) {
    console.error(err);
    throw Error("Failed to delete connection.");
  }
  revalidatePath("dashboard/connections");
}
