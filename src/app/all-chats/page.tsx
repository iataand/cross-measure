import { getCurrentProfile } from "@/data-access/user-details";
import fetchChatRoomsByProfileIdAction from "./actions";

export default async function ChatsPage() {
  const { userId: currentProfileId } = await getCurrentProfile();
  const chatRooms = await fetchChatRoomsByProfileIdAction(currentProfileId);

  return (
    <div className="flex w-full flex-col items-center border p-2">
      Select a chatroom from the left and start your music journey!
    </div>
  );
}
