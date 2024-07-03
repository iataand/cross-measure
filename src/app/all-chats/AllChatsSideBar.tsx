import { ChatRoom, TextMessage } from "@/API";
import ChatSideBarItem from "./ChatSideBarItem";
import { getLatestMessageByChatRoomId } from "@/data-access/textMessage";

export default async function AllChatsSideBar({
  chatRooms,
}: {
  chatRooms: ChatRoom[];
}) {
  const latestMessagesList: TextMessage[] = [];

  if (!chatRooms) {
    return <>No Chats Yet...</>;
  }

  for (const chatRoom of chatRooms) {
    try {
      const latestMessage = await getLatestMessageByChatRoomId(chatRoom.id);
      latestMessagesList.push(latestMessage);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ul className="w-1/4">
      {chatRooms.map((chatRoom, index) => (
        <ChatSideBarItem
          key={chatRoom.id}
          chatRoom={chatRoom}
          lastMessage={latestMessagesList[index]}
        />
      ))}
    </ul>
  );
}
