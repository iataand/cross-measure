"use client"

import { useCurrentConnectionChatStore } from "~/providers/current-connection-chat-provider"
import sendMessageAction from "./_actions/send-message.action";
import { Button } from "~/components/ui/button";

export default function CurrentChat() {
  const { connection } = useCurrentConnectionChatStore((state) => state)

  console.log(connection);

  return (
    <main className="flex-1 flex flex-col border">
      <header className="p-4 border">
        <h2 className="text-lg font-semibold">Selected Room</h2>
      </header>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="mb-2 p-2 w-max rounded">Hello!</div>
        <div className="mb-2 p-2 w-max ml-auto rounded">Hi there!</div>
      </div>
      <footer className="p-4 border flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-md"
          placeholder="Type a message..."
        />
        <Button variant="gradient" className="ml-2 px-4 py-2 rounded" onClick={() => sendMessageAction()}>Send</Button>
      </footer>
    </main>
  )
}
