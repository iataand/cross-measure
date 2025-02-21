import { useEffect, useState, ChangeEvent } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "~/firebase";
import { useCurrentConnectionChatStore } from "~/providers/current-connection-chat-provider";
import sendMessageAction from "~/app/dashboard/messages/_actions/send-message.action";

export type Message = {
  senderUid: string;
  connectionId: string;
  textMessage: string;
};

export default function useCurrentChat() {
  const { currentConnection } = useCurrentConnectionChatStore((state) => state);
  const [currentMessage, setcurrentMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setcurrentMessage(event.target.value);
  }

  async function handleSendMessage() {
    setcurrentMessage("");
    await sendMessageAction(currentMessage, currentConnection.id);
  }

  useEffect(() => {
    const chatRoomRef = collection(
      db,
      "chatRooms",
      currentConnection.id.toString(),
      "messages",
    );
    const q = query(chatRoomRef, orderBy("timestamp"));

    const unsub = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setMessages((prevMessages) => [
            ...prevMessages,
            change.doc.data() as Message,
          ]);
        }
      });
    });

    return () => {
      unsub();
      setMessages([]);
    };
  }, [currentConnection]);

  return {
    handleSendMessage,
    handleChangeInput,
    currentConnection,
    messages,
    currentMessage,
  };
}
