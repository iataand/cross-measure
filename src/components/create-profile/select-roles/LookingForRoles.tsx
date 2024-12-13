"use client";

import * as Dialog from "@radix-ui/react-dialog";
import MainButton from "../../buttons/MainButton";
import { IconX } from "@tabler/icons-react";
import { MusicRoles } from "~/utils/types";
import SelectRoles from "./SelectRoles";

export default function LookingForRoles({
  allMusicRoles,
}: {
  allMusicRoles: MusicRoles;
}) {
  return (
    <>
      <p className="font-2xl">What are you looking for?</p>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="flex w-20 min-w-40 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-gray-600 py-2 hover:bg-gray-800"></button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 flex h-[100vh] w-[100dvw] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-md bg-[#111418] p-12 text-center text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none md:max-h-[600px] md:max-w-[650px]">
            <Dialog.Title className="m-0 text-3xl font-medium">
              What instruments are you looking for?
            </Dialog.Title>
            <Dialog.Description>
              Please select up to 3 music roles
            </Dialog.Description>
            <SelectRoles allMusicRoles={allMusicRoles} />
            <div>
              <Dialog.Close asChild>
                <button className="absolute left-[calc(50%-104px)] top-[calc(100%-72px)] h-10 w-full cursor-pointer rounded-3xl bg-gradient-to-r from-red-500 to-gamboge-500 text-lg font-bold text-white hover:opacity-85 md:w-52">
                  Save
                </button>
              </Dialog.Close>
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
    </>
  );
}
