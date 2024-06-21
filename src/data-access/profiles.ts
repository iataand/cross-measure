import { CreateProfileInput } from "@/API";
import { cookiesClient } from ".";
import * as mutations from "@/graphql/mutations";

export async function createProfile(profile: CreateProfileInput) {
  await cookiesClient.graphql({
    query: mutations.createProfile,
    variables: { input: { ...profile } },
  });
}
