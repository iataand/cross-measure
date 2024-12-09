"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import bandPic from "~/assets/band.jpg";

export default function CreateBandProfileButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/create-profile/band");
  }

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      <Image src={bandPic} width={300} alt="Picture of band" className="mb-5" />
      <h1>I am a band</h1>
      <h1>(looking for new members)</h1>
    </div>
  );
}
