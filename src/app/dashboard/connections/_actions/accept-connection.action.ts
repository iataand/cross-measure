"use server";

import { db } from "~/db";
import { eq } from "drizzle-orm";
import { connections } from "~/db/schema";
import { cache } from "react";
import { revalidatePath } from "next/cache";

export const acceptConnectionAction = cache(
  async (connectionId: number): Promise<void> => {
    try {
      await db
        .update(connections)
        .set({ isAccepted: true })
        .where(eq(connections.id, connectionId));
    } catch (err) {
      console.error(err);
    }
    revalidatePath("/dasboard/connections/");
  },
);
