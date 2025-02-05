"use server";

import getConnectionByProfilesId from "~/data-access/connections/get-connection-by-profiles-ids";

export default async function getConnectionByProfilesIdAction(
  authProfileId: string,
  secondProfileId: string,
): Promise<boolean> {
  const res = await getConnectionByProfilesId(authProfileId, secondProfileId);

  if (!res) {
    throw Error("Failed to fetch connection status");
  }

  return res;
}
