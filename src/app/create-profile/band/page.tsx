import ProfileForm from "~/components/create-profile/profile-form/ProfileForm";
import {
  getCountries,
  getMusicGenres,
  getMusicRoles,
} from "~/services/createProfileData";

export default async function CreateProfile() {
  const [allGenres, allMusicRoles, allCountries] = await Promise.all([
    getMusicGenres(),
    getMusicRoles(),
    getCountries(),
  ]);

  return (
    <div className="p-2 md:h-[calc(100dvh-5rem)]">
      <h2 className="py-6 text-center text-2xl font-bold">
        Create Band Account
      </h2>
      <div className="flex justify-center">
        <ProfileForm
          allCountries={allCountries}
          allGenres={allGenres}
          allMusicRoles={allMusicRoles}
        />
      </div>
    </div>
  );
}
