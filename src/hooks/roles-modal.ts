"use client";

import { useState } from "react";
import { MusicRoles } from "~/utils/types";

type SelectedMusicRole = {
  instrumentType: string;
  instrument: string;
};

export function useRoles() {
  const [currentInstrumentType, setCurrentInstrumentType] = useState<
    keyof MusicRoles | ""
  >("");
  const [selectedRoles, setSelectedRoles] = useState<SelectedMusicRole[]>([]);
  const [savedRoles, setSavedRoles] = useState<SelectedMusicRole[]>([]);
  const [canAddRole, setCanAddRole] = useState(true);

  function handleSelectInstrumentType(e: any) {
    setCurrentInstrumentType(e.target.value);
  }

  function handleAddRole(instrument: string) {
    setSelectedRoles([
      ...selectedRoles,
      {
        instrumentType: currentInstrumentType,
        instrument,
      },
    ]);

    setCurrentInstrumentType("");
    setCanAddRole(false);
  }

  function handleDeleteSelectedInstrument(index: number) {
    setSelectedRoles((prevRoles) =>
      prevRoles.filter((_, roleIndex) => roleIndex !== index),
    );
  }

  function handleSaveRoles() {
    setSavedRoles(selectedRoles);
  }

  return {
    currentInstrumentType,
    setCurrentInstrumentType,
    selectedRoles,
    setSelectedRoles,
    canAddRole,
    setCanAddRole,
    handleSelectInstrumentType,
    handleAddRole,
    handleDeleteSelectedInstrument,
    savedRoles,
    setSavedRoles,
    handleSaveRoles,
  };
}
