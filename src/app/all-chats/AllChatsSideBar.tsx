import { ChatRoom } from "@/API";
import ChatSideBarItem from "./ChatSideBarItem";

export default function AllChatsSideBar({
  chatRooms,
}: {
  chatRooms: ChatRoom[];
}) {
  if (!chatRooms) {
    return <>No Chats Yet...</>;
  }

  return (
    <ul className="w-1/4">
      {chatRooms.map((chatRoom) => (
        <ChatSideBarItem key={chatRoom.id} chatRoom={chatRoom} />
      ))}
    </ul>
  );
}
