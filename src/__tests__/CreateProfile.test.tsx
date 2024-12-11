import { it, describe, beforeAll, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CreateBandProfile from "~/app/create-profile/band/page";
import userEvent from "@testing-library/user-event";
import { afterEach } from "node:test";

describe("Create Band Profile", async () => {
  beforeAll(async () => {
    render(await CreateBandProfile());
  });

  it("should render create band profile page", async () => {
    const createBandTitle = screen.getByText(/create band account/i);
    expect(createBandTitle).toBeDefined();
  });

  it("should open genres modal", async () => {
    const addGenresButton = screen.getByRole("button", { name: /add genres/i });
    await addGenresButton.click();

    const modalTitle = screen.getByText(/what kind of music are you into?/i);
    expect(modalTitle).toBeDefined();
  });

  it("should correctly display not found text", async () => {
    const searchGenreInput = screen.getByPlaceholderText(/search genre/i);
    await userEvent.type(searchGenreInput, "not a genre");
    const notFoundText = screen.findByText(
      /no genre found, try something else/i,
    );
    expect(notFoundText).toBeDefined();
  });

  it("should search and display indie rock genre", async () => {
    const searchGenreInput = screen.getByPlaceholderText(/search genre/i);
    await userEvent.type(searchGenreInput, "asd");
    const indieRockGenre = screen.findByText(/indie rock/i);
    expect(indieRockGenre).toBeDefined();
  });
});
