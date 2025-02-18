import { CurrentProfileStoreProvider } from "~/providers/current-profile-provider";
import Header from "./header";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ profileId: string }>;
}>) {
  return (
    <CurrentProfileStoreProvider>
      <Header />
      {children}
    </CurrentProfileStoreProvider>
  );
}
