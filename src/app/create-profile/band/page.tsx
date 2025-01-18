import { getCountriesAction } from "./_actions/get-countries.action";
import ProfileForm from "./profile-form";

export default async function CreateProfile() {
  const countries = await getCountriesAction();

  return (
    <div className="p-2">
      <h2 className="py-6 text-center text-2xl font-bold">
        Create Band Account
      </h2>
      <div className="flex justify-center">
        <ProfileForm countries={countries ?? []} />
      </div>
    </div>
  );
}
