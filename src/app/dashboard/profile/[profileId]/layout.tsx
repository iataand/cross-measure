import { CurrentProfileStoreProvider } from "~/providers/current-profile-provider";
// import { getProfileByProfileIdAction } from "./_actions/get-profile-by-profileId.action";
// import getGenresAction from "./_actions/get-genres.action";
// import { getCountries } from "~/data-access/countries/get-countries";

export default async function RootLayout({
  children,
  // params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ profileId: string }>;
}>) {
  // const profileId = (await params).profileId;
  // const profile = await getProfileByProfileIdAction(profileId);
  // const genres = await getGenresAction();
  // const countries = await getCountries();
  //
  // const profileImageUrl =
  //   profile.profileImageUrl ?? process.env.DEFAULT_PROFILE_IMAGE_URL!;
  return <CurrentProfileStoreProvider>{children}</CurrentProfileStoreProvider>;
}
