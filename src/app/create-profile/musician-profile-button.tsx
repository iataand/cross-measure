"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import musicianPic from "~/assets/musician.jpg";

export default function CreateMusicianProfileButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/create-profile/musician");
  }

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Image
        src={musicianPic}
        width={300}
        alt="Picture of musician"
        className="mb-5"
      />
      <h1>I am a solo artist </h1>
      <h1>(looking for collaboration)</h1>
    </div>
  );
}
