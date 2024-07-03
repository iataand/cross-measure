import { CreateTextMessageInput, ModelSortDirection } from "@/API";
import { cookiesClient } from ".";
import { createTextMessage } from "@/graphql/mutations";
import { getMessagesByChatRoomId } from "@/graphql/queries";
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
    query: getMessagesByChatRoomId,
    variables: { chatRoomId, sortDirection: ModelSortDirection.ASC },
  });

  return res.data.getMessagesByChatRoomId.items;
}

export async function getLatestMessageByChatRoomId(chatRoomId: string) {
  const res = await cookiesClient.graphql({
    query: getMessagesByChatRoomId,
    variables: { chatRoomId, sortDirection: ModelSortDirection.ASC, limit: 1 },
  });

  return res.data.getMessagesByChatRoomId.items[0];
}

export async function subscribeToChatRoomById(chatRoomId: string) {
  return client.graphql({
    query: onCreateTextMessageByChatRoomId,
    variables: { chatRoomId },
  });
}
