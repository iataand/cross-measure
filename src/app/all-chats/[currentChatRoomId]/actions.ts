"use server";
import { CreateTextMessageInput } from "@/API";
import { sendMessageUseCase } from "@/use-cases/textMessage";

export default async function sendMessage(
  formData: FormData,
  // chatRoomId: string,
  // ownerProfileId: string,
) {
  const message = formData.get("message") as string;
  return "";

  // if (!chatRoomId) {
  //   throw Error("ChatRoomId not found");
  // }

  // if (!ownerProfileId) {
  //   throw Error("OwnerProfileId not found");
  // }

  // if (!message) {
  //   throw Error("Message not found");
  // }

  // const textMessage: CreateTextMessageInput = {
  //   chatRoomId,
  //   ownerProfileId,
  //   message,
  // };

  // await sendMessageUseCase(textMessage);
}
