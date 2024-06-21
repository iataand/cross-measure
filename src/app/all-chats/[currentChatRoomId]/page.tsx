"use client";

import { useParams } from "next/navigation";

export default function ChatRoom() {
  const { currentChatRoomId } = useParams();

  return <>{currentChatRoomId}</>;
}
