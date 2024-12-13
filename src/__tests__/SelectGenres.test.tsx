import { it, describe, beforeAll, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SelectedGenres from "~/components/create-profile/select-genres/SelectedGenres";
import userEvent from "@testing-library/user-event";
import { beforeEach } from "node:test";

const allGenres = ["rock", "pop", "rap", "hip hop", "jazz", "blues"];

// Mock the useGenres hook
vi.mock("~/hooks/genres-modal", () => ({
  useGenres: vi.fn(() => ({
    setSearchGenre: vi.fn(),
    genres: allGenres,
    handleSelectGenre: vi.fn(),
    selectedGenres: [],
    handleSave: vi.fn(),
    selectedGenresTemp: [],
  })),
}));

async function openModal() {
  const addGenresButton = screen.getByRole("button", { name: /add genres/i });
  await userEvent.click(addGenresButton);
}

async function closeModal() {
  const closeButton = screen.getByRole("button", { name: /close/i });
  await userEvent.click(closeButton);
}

describe("Select Genre Modal", async () => {
  beforeAll(async () => {
    render(await SelectedGenres({ allGenres }));
  });

  it("should correctly display not found text", async () => {
    await openModal();

    const searchGenreInput = screen.getByPlaceholderText(/search genre/i);
    await userEvent.type(searchGenreInput, "not a genre");
    const notFoundText = screen.findByText(
      /no genre found, try something else/i,
    );
    expect(notFoundText).toBeDefined();

    await closeModal();
  });

  it("should search and display indie rock genre", async () => {
    await openModal();

    const searchGenreInput = screen.getByPlaceholderText(/search genre/i);
    await userEvent.type(searchGenreInput, "indie rock");

    const indieRockGenre = screen.findByText(/indie rock/i);
    expect(indieRockGenre).toBeDefined();
    await userEvent.clear(searchGenreInput);

    await closeModal();
  });

  it("should select rock, pop and rap from genres", async () => {
    await openModal();

    const popGenre = screen.getByRole("option", { name: "pop" });
    const rockGenre = screen.getByRole("option", { name: "rock" });
    const rapGenre = screen.getByRole("option", { name: "rap" });
    const saveButton = screen.getByRole("button", { name: /save/i });

    // Simulate selecting genres
    await userEvent.click(popGenre);
    await userEvent.click(rockGenre);
    await userEvent.click(rapGenre);

    //simulate clicking save
    await userEvent.click(saveButton);

    expect(screen.getByText("pop")).toBeInTheDocument();
    expect(screen.getByText("rock")).toBeInTheDocument();
    expect(screen.getByText("hip hop")).toBeInTheDocument();
  });
});
