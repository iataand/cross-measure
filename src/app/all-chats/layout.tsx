import { Card } from "@/components/ui/card";
import AllChatsSideBar from "./AllChatsSideBar";
import fetchChatRoomsByProfileIdAction from "./actions";
import { ChatRoom } from "@/API";

export default async function AllChats({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const chatRooms = await fetchChatRoomsByProfileIdAction(
    "b7361082-5c82-4c0b-98f1-0ef0fb7bb895",
  );

  return (
    <Card className="container flex h-[95vh] gap-2 px-0">
      <AllChatsSideBar chatRooms={chatRooms as ChatRoom[]} />
      {children}
    </Card>
  );
}
