"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { IconPlus, IconX } from "@tabler/icons-react";
import useGenres from "~/hooks/genres-modal";

export default function GenresModal({ allGenres }: { allGenres: string[] }) {
  const { setSearchGenre, genres } = useGenres(allGenres);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="w-20">
          <div className="flex w-full min-w-40 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-gray-600 py-2 hover:bg-gray-800">
            <IconPlus />
            Add Genres
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 flex h-[100vh] w-[100dvw] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-md bg-[#111418] p-12 text-center text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none md:max-h-[600px] md:max-w-[650px]">
          <Dialog.Title className="m-0 text-3xl font-medium">
            What kind of music are you into?
          </Dialog.Title>
          <Dialog.Description>
            <input
              type="text"
              className="bg-black p-2"
              onChange={(e) => setSearchGenre(e.target.value)}
            />
          </Dialog.Description>

          <div className="no-scrollbar flex flex-wrap justify-center gap-1 overflow-y-scroll">
            {genres.map((genre, index) => (
              <div
                key={`${index}-${genre}`}
                className="cursor-pointer rounded-3xl border-2 border-gray-700 px-2 py-1"
              >
                {genre}
              </div>
            ))}
            {genres.length === 0 && "No genre found, try something else"}
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute right-2.5 top-2.5 inline-flex size-[25px] cursor-pointer appearance-none items-center justify-center rounded-full hover:bg-gray-50/10 focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <IconX />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
