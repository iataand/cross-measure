"use client";

import { useGenres } from "~/hooks/genres-modal";
import * as Dialog from "@radix-ui/react-dialog";
import { IconPlus, IconX } from "@tabler/icons-react";
import { Genre } from "~/data-access/genres/get-genres";
import { Button } from "~/components/ui/button";

type PropTypes = {
  genres: Genre[] | undefined;
};

export default function SelectedGenres(props: PropTypes) {
  if (!props.genres) {
    return <>error</>;
  }

  const {
    setSearchGenre,
    genres,
    handleSelectGenre,
    selectedGenres,
    handleSave,
    selectedGenresTemp,
  } = useGenres(props.genres);

  return (
    <div className="mt-4">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="my-2 flex h-9 w-20 min-w-40 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-gray-600 py-2 hover:bg-gray-800">
            <IconPlus />
            {selectedGenres.length ? "Edit Genres" : "Add Genres"}
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 flex h-[100vh] w-[100dvw] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-md bg-[#111418] p-12 text-center text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none md:max-h-[600px] md:max-w-[650px]">
            <Dialog.Title className="m-0 text-3xl font-medium">
              What kind of music are you into?
            </Dialog.Title>
            <Dialog.Description>
              Please select up to 5 genres
            </Dialog.Description>
            <fieldset>
              <input
                type="text"
                className="w-full bg-black p-2"
                onChange={(e) => setSearchGenre(e.target.value)}
                placeholder="search genre"
              />
            </fieldset>
            <div
              className="no-scrollbar flex max-h-[289px] flex-wrap justify-center gap-x-2 gap-y-1 overflow-y-scroll"
              role="listbox"
            >
              {genres.map((genre) => (
                <div
                  role="option"
                  onClick={() => handleSelectGenre(genre.name)}
                  key={genre.id}
                  className={`cursor-pointer rounded-3xl border-2 border-gray-700 px-2 py-1 ${selectedGenresTemp.includes(genre.name) && "border-red-700"}`}
                >
                  {genre.name}
                </div>
              ))}
            </div>
            {genres.length === 0 && "No genre found, try something else"}
            <div>
              <Dialog.Close asChild>
                <Button
                  variant={"gradient"}
                  className="w-40"
                  onClick={handleSave}
                  disabled={selectedGenresTemp.length < 3}
                >
                  Save ({selectedGenresTemp.length}/5)
                </Button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <IconX className="absolute right-2.5 top-2.5 inline-flex size-[25px] cursor-pointer appearance-none items-center justify-center rounded-full hover:bg-gray-50/10 focus:shadow-[0_0_0_2px] focus:outline-none" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <div className="mt-4 flex flex-wrap gap-1" role="listbox">
        {selectedGenres.map((genre) => (
          <span
            role="option"
            key={genre}
            className="rounded-3xl border-2 border-red-700 px-2 py-1"
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}
