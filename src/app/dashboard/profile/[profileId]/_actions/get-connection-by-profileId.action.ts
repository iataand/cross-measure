"use server";

import getConnectionByProfilesId from "~/data-access/connections/get-connection-by-profiles-ids";

export default async function getConnectionByProfilesIdAction(
  profileToConnectWith: string,
): Promise<{ isAccepted: boolean } | undefined> {
  const res = await getConnectionByProfilesId(profileToConnectWith);

  return res;
}
