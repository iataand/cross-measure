"use client";

import { TextMessage, profileTypes } from "@/API";
import { client } from "@/data-access/index-client";
import { onCreateTextMessageByChatRoomId } from "@/graphql/subscriptions";
import { useEffect, useState } from "react";

export default function ChatHistory({
  chatHistory,
  chatRoomId,
}: {
  chatHistory: TextMessage[];
  chatRoomId: string;
}) {
  const [chatMessages, setChatMessages] = useState(chatHistory);

  useEffect(() => {
    const subscription = client
      .graphql({
        query: onCreateTextMessageByChatRoomId,
        variables: { chatRoomId },
      })
      .subscribe({
        next: (messageData) => {
          const newMessage = messageData.data
            .onCreateTextMessageByChatRoomId as TextMessage;

          setChatMessages((prevMessages) => [...prevMessages, newMessage]);
        },
        error: (err) => console.error(err),
      });

    return () => {
      subscription.unsubscribe();
    };
  }, [chatMessages]);

  return (
    <ul>
      {chatMessages.map((textMessage) => (
        <li key={textMessage.id}>
          <span className="font-bold">
            {displayMessageOwnerName(textMessage)}:{" "}
          </span>
          {textMessage.message}
        </li>
      ))}
    </ul>
  );
}

function displayMessageOwnerName(textMessage: TextMessage) {
  if (textMessage.ownerProfile?.type === profileTypes.band) {
    return textMessage.ownerProfile.bandName;
  }

  if (textMessage.ownerProfile?.type === profileTypes.musician) {
    return `${textMessage.ownerProfile?.firstName} ${textMessage.ownerProfile?.lastName}`;
  }
}
