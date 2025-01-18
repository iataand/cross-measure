"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import {
  BandProfile,
  createBandProfile,
} from "~/data-access/users/create-band-profile";

export async function createBandProfileAction(
  formData: BandProfile,
): Promise<any> {
  try {
    await createBandProfile(formData);
    revalidatePath("/");
    return { message: "Band profile created successfully" };
  } catch (e) {
    const error = e as Error & { code: string };
    if (error.code === "23505") {
      return { message: error.message, field: "email", error: true };
    }
    return { message: "An error occurred", error: true };
  }
}
