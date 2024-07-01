import { CreateProfileInput } from "@/API";
import { cookiesClient } from ".";
import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";

export async function createProfile(profile: CreateProfileInput) {
  await cookiesClient.graphql({
    query: mutations.createProfile,
    variables: { input: { ...profile } },
  });
}

export async function listProfiles() {
  const res = await cookiesClient.graphql({
    query: queries.listProfiles,
  });

  return res.data.listProfiles.items;
}

export async function fetchChatRoomsByProfileId(profileId: string) {
  const res = await cookiesClient.graphql({
    query: queries.listChatRooms,
    variables: { filter: { musicianProfileId: { eq: profileId } } },
  });

  return res.data.listChatRooms.items;
}
