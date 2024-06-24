"use server";
import { CreateTextMessageInput } from "@/API";
import { sendMessageUseCase } from "@/use-cases/textMessage";

export default async function sendMessage(
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
