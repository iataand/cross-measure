import { CurrentConnectionChatStoreProvider } from "~/providers/current-connection-chat-provider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <CurrentConnectionChatStoreProvider>
      {children}
    </CurrentConnectionChatStoreProvider>
  );
}

