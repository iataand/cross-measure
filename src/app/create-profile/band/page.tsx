import { getCountriesAction } from "./_actions/get-countries.action";
import ProfileForm from "./profile-form";
import { serverConfig } from "~/firebase.config";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { env } from "process";

export default async function CreateProfile() {
  const countries = await getCountriesAction();

  const tokens = await getTokens(await cookies(), {
    apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  const userId = tokens?.decodedToken.user_id;
  const email = tokens?.decodedToken.email;

  return (
    <div className="p-2">
      <h2 className="py-6 text-center text-2xl font-bold">
        Create Band Account
      </h2>
      <div className="flex justify-center">
        <ProfileForm
          countries={countries ?? []}
          userId={userId as string}
          email={email as string}
        />
      </div>
    </div>
  );
}
