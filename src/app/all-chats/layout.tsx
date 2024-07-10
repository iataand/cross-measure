import { Card } from "@/components/ui/card";
import AllChatsSideBar from "./AllChatsSideBar";
import fetchChatRoomsByProfileIdAction from "./actions";
import { ChatRoom } from "@/API";
import { getCurrentProfile } from "@/data-access/user-details";

export default async function AllChats({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId: currentProfileId } = await getCurrentProfile();
  const chatRooms = await fetchChatRoomsByProfileIdAction(currentProfileId);

  console.log("here222");

  return (
    <Card className="container flex min-h-[90vh] px-0">
      <AllChatsSideBar
        chatRooms={chatRooms as ChatRoom[]}
        currentProfileId={currentProfileId}
      />
      {children}
    </Card>
  );
}
