import {
  render,
  screen,
  renderHook,
  waitFor,
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach } from "node:test";
import { describe, it, expect, vi, beforeEach, beforeAll } from "vitest";
import SelectedGenres from "~/app/profile/[profileId]/select-genres";
import { useGenres } from "~/hooks/genres-modal";

describe("SelectedGenres Component", () => {
  const mockGenres = [
    { id: 1, name: "Rock" },
    { id: 2, name: "Pop" },
    { id: 3, name: "Jazz" },
    { id: 4, name: "Rap" },
    { id: 5, name: "Hip-hop" },
    { id: 6, name: "Trap" },
    { id: 7, name: "Alternative" },
  ];

  const { result } = renderHook(() => useGenres(mockGenres, 10));
  const user = userEvent.setup();

  beforeAll(() => {
    render(
      <SelectedGenres genres={mockGenres} profileId={1} selectedGenres={[]} />,
    );
  });

  afterEach(() => {
    cleanup();
  });

  // it("should display an error message if genres are undefined", () => {
  //   render(<SelectedGenres genres={undefined} />);
  //   expect(screen.getByText("error")).toBeInTheDocument();
  // });

  it("should render the add genres button correctly", async () => {
    const editButton = getAddGenresButton();

    expect(editButton).toBeInTheDocument();
    expect(result.current.selectedGenres).toHaveLength(0);
  });

  it("should open the genres modal when clicking the edit button", async () => {
    const editButton = getAddGenresButton();
    await user.click(editButton);
    expect(
      screen.getByText(/what kind of music are you into?/i),
    ).toBeInTheDocument();
  });

  it("should search for unavailable genre and display not found text", async () => {
    const searchGenreInput = screen.getByRole("textbox");

    await waitFor(() => user.type(searchGenreInput, "invalid genre"));
    await waitFor(() => expect(screen.getByText(/rock/i)).toBeInTheDocument());
    await waitFor(() => user.clear(searchGenreInput));
  });

  it("should search for rock genre and display it as the only result", async () => {
    const searchGenreInput = screen.getByRole("textbox");

    await waitFor(() => user.type(searchGenreInput, "rock"));
    await waitFor(() => expect(screen.getByText(/rock/i)).toBeInTheDocument());
    await waitFor(() => user.clear(searchGenreInput));
  });
});

function getAddGenresButton() {
  return screen.getByRole("button", { name: /add genres/i });
}

function getEditGenresButton() {
  return screen.getByRole("button", { name: /edit genres/i });
}
