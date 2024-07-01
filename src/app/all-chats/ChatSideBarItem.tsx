"use client";

import { ChatRoom } from "@/API";
import { useParams } from "next/navigation";
import useLatestMessage from "@/custom-hooks.ts";
import Link from "next/link";

export default function ChatSideBarItem({ chatRoom }: { chatRoom: ChatRoom }) {
  const { currentChatRoomId } = useParams();
  const latestMessage = useLatestMessage(chatRoom.id);

  return (
    <Link
      key={chatRoom.bandProfile?.id}
      href={`/all-chats/${chatRoom.id}`}
      className={`block h-16 cursor-pointer border p-2 hover:bg-slate-50 ${chatRoom.id === currentChatRoomId ? "bg-slate-100" : ""}`}
    >
      <li className="font-bold">{chatRoom.bandProfile?.bandName}</li>
      <li>
        <span className="font-bold">
          {latestMessage?.ownerProfile?.bandName}
        </span>
        : {latestMessage?.message}
      </li>
    </Link>
  );
}
