"use client";

import { ChatRoom, TextMessage } from "@/API";
import { client } from "@/data-access/index-client";
import { onCreateTextMessageByChatRoomId } from "@/graphql/subscriptions";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatSideBarItem({ chatRoom }: { chatRoom: ChatRoom }) {
  const [latestMessage, setLatestMessage] = useState<TextMessage>();
  const { chatRoomId } = useParams();

  useEffect(() => {
    const subscription = client
      .graphql({
        query: onCreateTextMessageByChatRoomId,
        variables: { chatRoomId: chatRoom.id },
      })
      .subscribe({
        next: (messageData) => {
          const newMessage = messageData.data
            .onCreateTextMessageByChatRoomId as TextMessage;

          setLatestMessage(newMessage);
        },
        error: (err) => console.error(err),
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Link
      key={chatRoom.bandProfile?.id}
      href={`/all-chats/${chatRoom.id}`}
      className={`block h-16 cursor-pointer border p-2 hover:bg-slate-50 ${chatRoom.id === chatRoomId ? "bg-slate-100" : ""}`}
    >
      <li>{chatRoom.bandProfile?.bandName}</li>
      <>{latestMessage?.message}</>
    </Link>
  );
}
