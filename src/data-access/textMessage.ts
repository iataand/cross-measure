import { CreateTextMessageInput } from "@/API";
import { cookiesClient } from ".";
import { createTextMessage } from "@/graphql/mutations";

export default async function sendTextMessage(
  textMessage: CreateTextMessageInput,
) {
  await cookiesClient.graphql({
    query: createTextMessage,
    variables: { input: textMessage },
  });
}
