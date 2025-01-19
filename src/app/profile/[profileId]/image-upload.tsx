"use client";

import { IconCamera, IconLoader } from "@tabler/icons-react";
import { useState } from "react";
import { UploadButton } from "~/lib/uploadthing";
import Image from "next/image";
import uploadProfileImageAction from "./_actions/upload-profile-image.action";

type PropTypes = {
  profileImageUrl: string;
  profileId: number;
};

export default function ProfileImage(props: PropTypes) {
  const [imageUrl, setImageUrl] = useState(props.profileImageUrl);

  return (
    <div className="position relative">
      <Image
        width={250}
        height={250}
        src={imageUrl}
        alt="Profile image"
        className="position relative"
      />
      <UploadButton
        className="position absolute bottom-1 right-1 opacity-50 hover:opacity-80"
        content={{
          button({ ready }) {
            if (ready) return <IconCamera />;
            return <IconLoader />;
          },
        }}
        appearance={{
          button: {
            backgroundColor: "black",
            width: "fit-content",
            height: "fit-content",
            padding: "0.2rem",
            border: "none",
            borderStyle: "none",
          },
          allowedContent: {
            display: "none",
          },
          container: {
            width: "fit-content",
          },
        }}
        endpoint="imageUploader"
        onClientUploadComplete={async (res) => {
          // Do something with the response
          if (res[0]) {
            setImageUrl(`https://utfs.io/f/${res[0].key}`);
            await uploadProfileImageAction(
              `https://utfs.io/f/${res[0].key}`,
              props.profileId,
            );
          }

          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
