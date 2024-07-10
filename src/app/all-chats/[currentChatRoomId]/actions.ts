"use server";
import { CreateTextMessageInput } from "@/API";
import {
  listMessagesByChatRoomIdUseCase,
  sendMessageUseCase,
} from "@/use-cases/textMessage";
import { revalidatePath } from "next/cache";
import z, { ZodError } from "zod";

const textMessageSchema = z.object({
  message: z.string().min(1).max(100),
  chatRoomId: z.string(),
  ownerProfileId: z.string(),
});

type Fields = {
  message: string;
};

export type FormState = {
  message: string;
  errors: Record<keyof Fields, string> | undefined;
  fieldValues: Fields;
};

export async function sendMessageAction(
  chatRoomId: string,
  ownerProfileId: string,
  formState: FormState,
  formData: FormData,
): Promise<FormState> {
  const message = formData.get("message") as string;

  const textMessage: CreateTextMessageInput = {
    chatRoomId,
    ownerProfileId,
    message,
  };

  try {
    // textMessageSchema.parse(textMessage);
    await sendMessageUseCase(textMessage);

    return {
      message: "success",
      errors: undefined,
      fieldValues: { message: "" },
    };
  } catch (error) {
    const zodError = error as ZodError;
    const errorMap = zodError.flatten().fieldErrors;

    return {
      message: "error",
      errors: { message: errorMap["message"]?.[0] ?? "" },
      fieldValues: { message: "" },
    };
  }
}

export async function listMessagesByChatRoomIdAction(chatRoomId: string) {
  try {
    return await listMessagesByChatRoomIdUseCase(chatRoomId);
  } catch (error) {
    console.error(error);
  }
}
