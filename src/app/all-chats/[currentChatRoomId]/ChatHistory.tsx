"use client";

import { TextMessage, profileTypes } from "@/API";
import { useChatHistory } from "@/custom-hooks.ts";

export default function ChatHistory({
  chatHistory,
  chatRoomId,
}: {
  chatHistory: TextMessage[];
  chatRoomId: string;
}) {
  const chatMessages = useChatHistory(chatRoomId, chatHistory);

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
