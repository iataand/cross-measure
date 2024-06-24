"use server";
import { CreateTextMessageInput } from "@/API";
import {
  listMessagesByChatRoomIdUseCase,
  sendMessageUseCase,
} from "@/use-cases/textMessage";
import { revalidatePath } from "next/cache";
import { RefObject } from "react";

export async function sendMessageAction(
  chatRoomId: string,
  ownerProfileId: string,
  formState: any,
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

  revalidatePath(`/all-chats/${chatRoomId}`);

  await sendMessageUseCase(textMessage);

  return {
    message: "success",
    errors: undefined,
    fieldValues: { message: "" },
  };
}

export async function listMessagesByChatRoomIdAction(chatRoomId: string) {
  if (!chatRoomId) {
    throw Error("ChatRoomId not found");
  }

  revalidatePath(`/all-chats/${chatRoomId}`);

  return await listMessagesByChatRoomIdUseCase(chatRoomId);
}
