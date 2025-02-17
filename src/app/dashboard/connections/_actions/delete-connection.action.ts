"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "~/db";
import { connections } from "~/db/schema";

export default async function deleteConnectionAction(id: number) {
  revalidatePath("dashboard/connections");

  await db.delete(connections).where(eq(connections.id, id));
}
