import CreateBandProfileButton from "~/app/create-profile/band-profile-button";
import CreateMusicianProfileButton from "~/app/create-profile/musician-profile-button";

export default async function CreateProfile() {
  return (
    <div className="my-12 h-[100dvh]">
      <h1 className="text-center text-2xl font-bold">
        Please choose one of the options
      </h1>
      <div className="mt-10 flex justify-center gap-16 text-center">
        <CreateBandProfileButton />
        <CreateMusicianProfileButton />
      </div>
    </div>
  );
}
