"use server";

import { revalidatePath } from "next/cache";
import {
  BandProfile,
  createBandProfile,
  MusicianProfile,
  createMusicianProfile,
} from "~/data-access/profiles/create-band-profile";

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
      return {
        message: "There is already a profile with this email",
        field: "email",
        error: true,
      };
    }
    return { message: "An error occurred", error: true };
  }
}

export async function createMusicianProfileAction(
  formData: MusicianProfile,
): Promise<any> {
  try {
    await createMusicianProfile(formData);
    revalidatePath("/");
    return { message: "Musician profile created successfully" };
  } catch (e) {
    const error = e as Error & { code: string };
    if (error.code === "23505") {
      return {
        message: "There is already a profile with this email",
        field: "email",
        error: true,
      };
    }
    return { message: "An error occurred", error: true };
  }
}
