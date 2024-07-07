import { Profile, profileTypes } from "@/API";
import { getProfileById } from "@/data-access/profiles";
import { getCurrentProfile } from "@/data-access/user-details";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import TextsmsIcon from "@mui/icons-material/Textsms";
import Link from "next/link";

export default async function Header() {
  const { userId } = await getCurrentProfile();
  const profile = await getProfileById(userId);

  if (!profile) {
    <>please login</>;
  }

  return (
    <main className="flex h-12 items-center justify-around border bg-slate-50">
      <span>CrossMeasure</span>
      <ul className="flex gap-10">
        <Link href="/" className="flex gap-2">
          <SearchIcon />
          Search
        </Link>
        <Link href="/" className="flex gap-2">
          <LibraryMusicIcon />
          Connections
        </Link>
        <Link href="/" className="flex gap-2">
          <TextsmsIcon />
          Messages
        </Link>
      </ul>
      {renderProfileName(profile as Profile)}
    </main>
  );
}

function renderProfileName(profile: Profile) {
  if (profile.type === profileTypes.band) {
    return <>{profile.bandName}</>;
  }

  if (profile.type === profileTypes.musician) {
    return (
      <>
        <>{profile.firstName} </> <>{profile.lastName}</>
      </>
    );
  }
}
