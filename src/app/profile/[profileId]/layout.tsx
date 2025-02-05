import { CurrentProfileStoreProvider } from "~/providers/current-profile-provider";
import { getCountries } from "~/data-access/countries/get-countries";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ profileId: string }>;
}>) {
  return <CurrentProfileStoreProvider>{children}</CurrentProfileStoreProvider>;
}
