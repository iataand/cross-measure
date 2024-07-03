import { TextMessage } from "@/API";
import { client } from "@/data-access/index-client";
import { onCreateTextMessageByChatRoomId } from "@/graphql/subscriptions";
import { useEffect, useState } from "react";

export function useLatestMessage(lastMessage: TextMessage, chatRoomId: string) {
  const [latestMessage, setLatestMessage] = useState<TextMessage>(lastMessage);

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

          setLatestMessage(newMessage);
        },
        error: (err) => console.error(err),
      });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return latestMessage;
}

export function useChatHistory(chatRoomId: string, chatHistory: TextMessage[]) {
  const [chatMessages, setChatMessages] = useState<TextMessage[]>(chatHistory);

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
  }, []);

  return chatMessages;
}
