"use client";

import { ChatRoom, Profile, TextMessage } from "@/API";
import { useParams } from "next/navigation";
import { useLatestMessage } from "@/custom-hooks.ts";
import Link from "next/link";

export default function ChatSideBarItem({
  chatRoom,
  lastMessage,
}: {
  chatRoom: ChatRoom;
  lastMessage: TextMessage;
}) {
  const { currentChatRoomId } = useParams();
  const latestMessage = useLatestMessage(lastMessage, chatRoom.id);
  console.log(chatRoom);

  return (
    <Link
      key={chatRoom.bandProfile?.id}
      href={`/all-chats/${chatRoom.id}`}
      className={`block h-16 cursor-pointer border p-2 hover:bg-slate-50 ${chatRoom.id === currentChatRoomId ? "bg-slate-100" : ""}`}
    >
      <li className="font-bold">
        {chatRoom.bandProfile?.bandName}, {chatRoom.musicianProfile?.lastName}
      </li>
      <li>
        <span>
          {latestMessage?.ownerProfile?.lastName ||
            latestMessage?.ownerProfile?.bandName}
        </span>
        : {latestMessage?.message}
      </li>
    </Link>
  );
}
