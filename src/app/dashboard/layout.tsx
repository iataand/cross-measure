import { CurrentProfileStoreProvider } from "~/providers/current-profile-provider";
import Header from "./header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CurrentProfileStoreProvider>
      <Header />
      {children}
    </CurrentProfileStoreProvider>
  );
}
