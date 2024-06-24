"use server";
import { CreateTextMessageInput } from "@/API";
import {
  listMessagesByChatRoomIdUseCase,
  sendMessageUseCase,
} from "@/use-cases/textMessage";

export async function sendMessageAction(
  chatRoomId: string,
  ownerProfileId: string,
  formData: FormData,
) {
  const message = formData.get("message") as string;

  if (!chatRoomId) {
    throw Error("ChatRoomId not found");
  }

  if (!ownerProfileId) {
    throw Error("OwnerProfileId not found");
  }

  if (!message) {
    throw Error("Message not found");
  }

  const textMessage: CreateTextMessageInput = {
    chatRoomId,
    ownerProfileId,
    message,
  };

  await sendMessageUseCase(textMessage);
}

export async function listMessagesByChatRoomIdAction(chatRoomId: string) {
  if (!chatRoomId) {
    throw Error("ChatRoomId not found");
  }

  return await listMessagesByChatRoomIdUseCase(chatRoomId);
}
