import { getProfileById } from "@/data-access/profiles";
import { getCurrentProfile } from "@/data-access/user-details";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import TextsmsIcon from "@mui/icons-material/Textsms";
import Link from "next/link";
import ProfileMenu from "./AuthComponent";

export default async function Header() {
  let user;
  try {
    user = await getCurrentProfile();
  } catch (error) {
    console.log(error);

    return <></>;
  }
  const profile = await getProfileById(user.userId);

  if (!profile) {
    return <>please login</>;
  }

  return (
    <main className="flex items-center justify-around border bg-slate-50 py-3">
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
        <Link href="/all-chats" className="flex gap-2">
          <TextsmsIcon />
          Messages
        </Link>
      </ul>

      <ProfileMenu profile={profile!} />
    </main>
  );
}
