import { useState } from "react";
import { MusicRoles } from "~/utils/types";

export default function SelectRoles({
  allMusicRoles,
}: {
  allMusicRoles: MusicRoles;
}) {
  const [musicRole, setMusicRole] = useState<keyof MusicRoles>("Strings");

  return (
    <>
      <select
        name="instruments"
        className="h-10 bg-black"
        onChange={(e) => setMusicRole(e.target.value as keyof MusicRoles)}
      >
        {Object.keys(allMusicRoles).map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
      <div
        className="no-scrollbar flex flex-wrap justify-center gap-x-2 gap-y-1 overflow-y-scroll"
        role="listbox"
      >
        {allMusicRoles[musicRole].map((instrument) => (
          <div
            role="option"
            key={instrument}
            className="cursor-pointer rounded-3xl border-2 border-gray-700 px-2 py-1 hover:opacity-70"
          >
            {instrument}
          </div>
        ))}
      </div>
    </>
  );
}
