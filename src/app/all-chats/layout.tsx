import { Card } from "@/components/ui/card";
import AllChatsSideBar from "./AllChatsSideBar";
import fetchChatRoomsByProfileIdAction from "./actions";
import { ChatRoom } from "@/API";
import { getCurrentProfileId } from "@/data-access/user-details";

export default async function AllChats({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentProfileId = await getCurrentProfileId();
  const chatRooms = await fetchChatRoomsByProfileIdAction(currentProfileId);

  console.log(chatRooms);

  return (
    <Card className="container flex h-[95vh] gap-2 px-0">
      <AllChatsSideBar
        chatRooms={chatRooms as ChatRoom[]}
        currentProfileId={currentProfileId}
      />
      {children}
    </Card>
  );
}
