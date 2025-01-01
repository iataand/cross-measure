import React from "react";

const YoutubeEmbed = ({ embedId }: { embedId: string }) => {
  const isMatch = embedId.match(
    /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]{11}$/,
  );

  if (!embedId) return <></>;

  return (
    <>
      {isMatch ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${embedId.substring(embedId.lastIndexOf("=") + 1)}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      ) : (
        <p className="text-destructive">
          There is something wrong with your link.
        </p>
      )}
    </>
  );
};

export default YoutubeEmbed;
