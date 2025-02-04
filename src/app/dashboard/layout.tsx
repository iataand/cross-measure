import { CurrentProfileStoreProvider } from "~/providers/current-profile-provider";
import Header from "./header";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ profileId: string }>;
}>) {
  const profileId = (await params).profileId;
  return (
    <CurrentProfileStoreProvider>
      <Header name={"asd"} />
      {children}
    </CurrentProfileStoreProvider>
  );
}
