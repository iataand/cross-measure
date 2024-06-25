import ChatHistory from "./ChatHistory";
import SendMessageForm from "./SendMessageForm";
import { listMessagesByChatRoomIdAction } from "./actions";

export default async function CurrentChat({
  params,
}: {
  params: { currentChatRoomId: string };
}) {
  const { currentChatRoomId } = params;
  const chatHistory = await listMessagesByChatRoomIdAction(currentChatRoomId);

  console.log(chatHistory);

  return (
    <main className="flex w-full flex-col justify-between border p-2">
      <ChatHistory
        chatHistory={chatHistory ?? []}
        chatRoomId={currentChatRoomId}
      />
      <SendMessageForm currentChatRoomId={currentChatRoomId} />
    </main>
  );
}
