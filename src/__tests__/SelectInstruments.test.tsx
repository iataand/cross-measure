import { it, describe, beforeAll, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SelectedGenres from "~/components/create-profile/select-genres/SelectedGenres";
import userEvent from "@testing-library/user-event";
import LookingForRoles from "~/components/create-profile/select-roles/LookingForRoles";
import { boolean } from "zod";
import { beforeEach } from "node:test";

const allMusicRoles = {
  Strings: [
    "Guitar",
    "Violin",
    "Bass",
    "Cello",
    "Harp",
    "Mandolin",
    "Ukulele",
    "Banjo",
    "Sitar",
  ],
  Keyboard: ["Piano", "Organ", "Keyboard", "Harpsichord"],
  Wind: [
    "Flute",
    "Clarinet",
    "Saxophone",
    "Oboe",
    "Bassoon",
    "Trumpet",
    "Trombone",
    "Horn",
    "Tuba",
    "Recorder",
  ],
  Percussion: ["Drums", "Timpani", "Xylophone", "Marimba", "Percussion"],
  Vocals: [
    "Lead Vocal",
    "Backing Vocal",
    "Soprano",
    "Alto",
    "Tenor",
    "Baritone",
    "Bass",
    "Choir",
    "Opera Singer",
  ],
  Other: ["Accordion", "Harmonica", "Bagpipes", "Lute", "Fiddle"],
};

vi.mock("~/hooks/roles-modal", () => ({
  useRoles: vi.fn(() => ({
    canAddRole: false,
    currentInstrumentType: "",
    handleAddRole: vi.fn(),
    handleDeleteSelectedInstrument: vi.fn(),
    handleSelectInstrumentType: vi.fn(),
    setCanAddRole: vi.fn(),
    selectedRoles: [],
    handleSaveRoles: vi.fn(),
    savedRoles: [],
  })),
}));

async function openModal() {
  const addGenresButton = screen.getByRole("button", { name: /select roles/i });
  await userEvent.click(addGenresButton);
}

async function closeModal() {
  const closeButton = screen.getByRole("button", { name: /close/i });
  await userEvent.click(closeButton);
}

describe("Select Genre Modal", async () => {
  beforeAll(async () => {
    render(await LookingForRoles({ allMusicRoles }));
  });

  it("should open the select roles modal", async () => {
    const addRolesButton = screen.getByRole("button", {
      name: /select roles/i,
    });
    await userEvent.click(addRolesButton);

    expect(
      screen.findByText(/What instruments are you looking for?/i),
    ).toBeDefined();
  });
});
