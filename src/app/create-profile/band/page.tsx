import { cookies } from "next/headers";
import { getCountriesAction } from "./_actions/get-countries.action";
import ProfileForm from "./profile-form";
import { adminAuth } from "~/firebaseAdmin";

export default async function CreateProfile() {
  const countries = await getCountriesAction();
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('sessionCookie');
  const { user_id, email } = await adminAuth.verifySessionCookie(sessionCookie!.value);


  return (
    <div className="p-2">
      <h2 className="py-6 text-center text-2xl font-bold">
        Create Band Account
      </h2>
      <div className="flex justify-center">
        <ProfileForm
          countries={countries ?? []}
          userId={user_id}
          email={email!}
        />
      </div>
    </div>
  );
}
