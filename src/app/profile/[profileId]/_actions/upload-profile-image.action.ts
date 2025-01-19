"use server";

import uploadProfileImage from "~/data-access/profiles/upload-profile-image";

export default async function uploadProfileImageAction(
  profileImageUrl: string,
  profileId: number,
) {
  await uploadProfileImage(profileImageUrl, profileId);
}
