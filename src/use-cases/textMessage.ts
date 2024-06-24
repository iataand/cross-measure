import { CreateTextMessageInput, ListTextMessagesQuery } from "@/API";
import {
  sendTextMessage,
  listMessagesByChatRoomId,
} from "@/data-access/textMessage";

export async function sendMessageUseCase(textMessage: CreateTextMessageInput) {
  // to-do add zod validation here

  await sendTextMessage(textMessage);
}

export async function listMessagesByChatRoomIdUseCase(chatRoomId: string) {
  return await listMessagesByChatRoomId(chatRoomId);
}
