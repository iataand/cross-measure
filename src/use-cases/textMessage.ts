import { CreateTextMessageInput } from "@/API";
import sendTextMessage from "@/data-access/textMessage";

export async function sendMessageUseCase(textMessage: CreateTextMessageInput) {
  // to-do add zod validation here

  await sendTextMessage(textMessage);
}
