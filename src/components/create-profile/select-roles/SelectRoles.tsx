"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { IconPlus, IconX } from "@tabler/icons-react";
import { MusicRoles } from "~/utils/types";
import { useRoles } from "~/hooks/roles-modal";

export default function SelectRoles({
  allMusicRoles,
}: {
  allMusicRoles: MusicRoles;
}) {
  const {
    canAddRole,
    currentInstrumentType,
    handleAddRole,
    handleDeleteSelectedInstrument,
    handleSelectInstrumentType,
    setCanAddRole,
    selectedRoles,
    handleSaveRoles,
    savedRoles,
  } = useRoles();

  return (
    <div className="mt-2">
      <p className="font-2xl">What are you looking for?</p>
      <div className="no-scrollbar overflow-y-scroll" role="listbox">
        {savedRoles.map((role, index) => (
          <div
            role="option"
            className="flex"
            key={`${role.instrument}-${index}`}
          >
            {index + 1}. {role.instrumentType} {role.instrument}
          </div>
        ))}
      </div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="my-2 flex w-20 min-w-40 cursor-pointer items-center justify-center gap-1 rounded-3xl border-2 border-gray-600 py-2 hover:bg-gray-800">
            <IconPlus />
            Select Roles
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-1/2 top-1/2 flex h-[100vh] w-[100dvw] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-md bg-[#111418] p-12 text-center text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none md:max-h-[600px] md:max-w-[650px]">
            <Dialog.Title className="m-0 text-3xl font-medium">
              What instruments are you looking for?
            </Dialog.Title>
            <Dialog.Description />
            <div className="no-scrollbar overflow-y-scroll" role="listbox">
              {selectedRoles.map((role, index) => (
                <div
                  className="flex items-center text-xl"
                  key={`${role.instrument}-${index}`}
                >
                  {index + 1}. Type: {role.instrumentType} | Instrument:
                  {role.instrument} |
                  <IconX
                    onClick={() => handleDeleteSelectedInstrument(index)}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
            {canAddRole || selectedRoles.length === 0 ? (
              <>
                <select
                  id="instrument-select"
                  name="instruments"
                  className="h-10 bg-black"
                  onChange={handleSelectInstrumentType}
                >
                  <option value="default" className="hidden opacity-80">
                    Select a type of instrument
                  </option>
                  {Object.keys(allMusicRoles).map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <div
                className={`${selectedRoles.length === 3 ? "hidden" : ""} flex h-8 cursor-pointer items-center justify-center border hover:bg-slate-600`}
                onClick={() => setCanAddRole(true)}
              >
                Add Instrument
                <IconPlus />
              </div>
            )}
            <div
              className="no-scrollbar flex flex-wrap justify-center gap-x-2 gap-y-1 overflow-y-scroll"
              role="listbox"
            >
              {currentInstrumentType !== "" &&
                allMusicRoles[currentInstrumentType].map((instrument) => (
                  <div
                    role="option"
                    key={instrument}
                    className="cursor-pointer rounded-3xl border-2 border-gray-700 px-2 py-1 hover:opacity-70"
                    onClick={() => handleAddRole(instrument)}
                  >
                    {instrument}
                  </div>
                ))}
            </div>
            <Dialog.Close asChild>
              <button
                className="h-10 w-full cursor-pointer rounded-3xl from-red-500 to-gamboge-500 text-lg font-bold text-white hover:opacity-85 enabled:bg-red-500 enabled:bg-gradient-to-r disabled:cursor-default disabled:bg-gray-400 disabled:hover:opacity-100 md:absolute md:left-[calc(50%-104px)] md:top-[calc(100%-72px)] md:w-52"
                onClick={handleSaveRoles}
              >
                Save
              </button>
            </Dialog.Close>
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
    </div>
  );
}
