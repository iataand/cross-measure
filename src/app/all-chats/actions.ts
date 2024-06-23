import { fetchChatRoomsByProfileId } from "@/data-access/profiles";
import { error } from "console";

export default async function fetchChatRoomsByProfileIdAction(
  profileId: string,
) {
  if (!profileId) {
    throw error("ProfileId not found");
  }

  return await fetchChatRoomsByProfileId(profileId);
}
