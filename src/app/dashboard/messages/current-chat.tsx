"use client"

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import useCurrentChat from "~/hooks/text-message";

export default function CurrentChat() {
  const { handleSendMessage, currentConnection, currentMessage, messages, handleChangeInput } = useCurrentChat();

  if (currentConnection.profile === null) {
    return <>Select a connection from the left sidebar to start a conversation.</>
  }

  const { profile } = currentConnection;

  return (
    <main className="flex-1 flex flex-col border">
      <header className="p-4 border">
        <h2 className="text-lg font-semibold">{profile.bandName}</h2>
      </header>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, i) => (
          <div
            key={message.connectionId + i}
          >
            {message.textMessage}
          </div>)
        )}
      </div>
      <form action={handleSendMessage} className="p-4 border flex">
        <Input
          type="text"
          className="flex-1 p-2 border rounded-md"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={handleChangeInput}
        />
        <Button
          type="submit"
          variant="gradient"
          className="ml-2 px-4 py-2 rounded"
        >
          Send
        </Button>
      </form>
    </main>
  )
}
