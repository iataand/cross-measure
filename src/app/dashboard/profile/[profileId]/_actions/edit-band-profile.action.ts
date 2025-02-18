"use server";

import { revalidatePath } from "next/cache";
import { BandProfile } from "~/data-access/profiles/create-band-profile";
import { editBandProfile } from "~/data-access/profiles/edit-band-profile";

export async function editBandProfileAction(
  formData: BandProfile,
  profileId: string,
): Promise<unknown> {
  try {
    await editBandProfile(formData, profileId);
    revalidatePath("/");
    return { message: "Band profile updated successfully" };
  } catch (e) {
    return { message: "An error occurred", error: true };
  }
}
