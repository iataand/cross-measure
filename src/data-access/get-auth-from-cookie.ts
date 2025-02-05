import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { env } from "process";
import { serverConfig } from "~/firebase.config";

export default async function getAuthUid(): Promise<string | undefined> {
  const token = await getTokens(await cookies(), {
    apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY!,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  return token?.decodedToken.uid;
}
