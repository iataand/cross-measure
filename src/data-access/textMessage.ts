import { CreateTextMessageInput, ModelSortDirection } from "@/API";
import { cookiesClient } from ".";
import { createTextMessage } from "@/graphql/mutations";
import { messagesByChatRoomId } from "@/graphql/queries";
import { onCreateTextMessageByChatRoomId } from "@/graphql/subscriptions";
import { client } from "./index-client";

export async function sendTextMessage(textMessage: CreateTextMessageInput) {
  await cookiesClient.graphql({
    query: createTextMessage,
    variables: { input: textMessage },
  });
}

export async function listMessagesByChatRoomId(chatRoomId: string) {
  const res = await cookiesClient.graphql({
    query: messagesByChatRoomId,
    variables: { chatRoomId, sortDirection: ModelSortDirection.ASC },
  });

  return res.data.messagesByChatRoomId.items;
}

export async function subscribeToChatRoomById(chatRoomId: string) {
  return client.graphql({
    query: onCreateTextMessageByChatRoomId,
    variables: { chatRoomId },
  });
}
