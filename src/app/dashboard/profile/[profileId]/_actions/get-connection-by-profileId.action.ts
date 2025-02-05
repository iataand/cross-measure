"use server";

import getConnectionByProfilesId from "~/data-access/connections/get-connection-by-profiles-ids";

export default async function getConnectionByProfilesIdAction(
  profileToConnectWith: string,
): Promise<boolean> {
  const res = await getConnectionByProfilesId(profileToConnectWith);

  if (!res) {
    throw Error("Failed to fetch connection status");
  }

  return res;
}
