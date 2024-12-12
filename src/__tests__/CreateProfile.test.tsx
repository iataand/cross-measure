import { it, describe, beforeAll, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CreateBandProfile from "~/app/create-profile/band/page";
import userEvent from "@testing-library/user-event";

describe("Create Band Profile", async () => {
  beforeAll(async () => {
    render(await CreateBandProfile());
  });

  it("should render create band profile page", async () => {
    const createBandTitle = screen.getByText(/create band account/i);
    expect(createBandTitle).toBeDefined();
  });
});

// describe("select genres feature", async () => {
// it("should select rock, pop and rap from genres", async () => {
//   const addGenresButton = screen.getByRole("button", { name: /add genres/i });
//   await userEvent.click(addGenresButton);

//   const popGenre = screen.getByRole("option", { name: "pop" });
//   const rockGenre = screen.getByRole("option", { name: "rock" });
//   const rapGenre = screen.getByRole("option", { name: "rap" });
//   const saveButton = screen.getByRole("button", { name: /save/i });

//   // Simulate selecting genres
//   await userEvent.click(popGenre);
//   await userEvent.click(rockGenre);
//   await userEvent.click(rapGenre);

//   //simulate clicking save
//   await userEvent.click(saveButton);

//   expect(screen.getByText("pop")).toBeInTheDocument();
//   expect(screen.getByText("rock")).toBeInTheDocument();
//   expect(screen.getByText("rap")).toBeInTheDocument();
// });

//   it("should edit selected genres and add jazz", async () => {
//     const editGenresButton = screen.getByRole("button", {
//       name: /edit genres/i,
//     });
//     await userEvent.click(editGenresButton); //openn modal

//     const jazzGenre = screen.getByRole("option", { name: "jazz" });
//     await userEvent.click(jazzGenre);

//     const saveButton = screen.getByRole("button", { name: /save/i });
//     // expect(saveButton).toBeInTheDocument();
//     await userEvent.click(saveButton);

//     expect(screen.getByText("pop")).toBeInTheDocument();
//     expect(screen.getByText("rock")).toBeInTheDocument();
//     expect(screen.getByText("rap")).toBeInTheDocument();
//     expect(screen.getByText("jazz")).toBeInTheDocument();
//   });

// it("should edit selected genres and delete rap", async () => {
//   const editGenresButton = screen.getByRole("button", {
//     name: /edit genres/i,
//   });
// await userEvent.click(editGenresButton); //open modal

// // const rapGenre = screen.getByRole("option", { name: "rap" });
// // await userEvent.click(rapGenre);

// // const saveButton = screen.getByRole("button", { name: /save/i });
// // await userEvent.click(saveButton);

// // expect(screen.getByText("pop")).toBeInTheDocument();
// // expect(screen.getByText("rock")).toBeInTheDocument();
// // expect(screen.getByText("jazz")).toBeInTheDocument();

// const closeButton = screen.getByRole("button", { name: /close/i });
// await userEvent.click(closeButton);
// });
// it("should edit selected genres, delete rock and add blues", async () => {
//   //open genres modal
//   const editGenresButton = screen.getByRole("button", {
//     name: /edit genres/i,
//   });
//   await userEvent.click(editGenresButton);

//   //de-select rock
//   const rockGenre = screen.getByRole("option", { name: "rock" });
//   await userEvent.click(rockGenre);

//   //select blues
//   const bluesGenre = screen.getByRole("option", { name: "blues" });
//   await userEvent.click(bluesGenre);

//   // save genres and exit modal
//   const saveButton = screen.getByRole("button", { name: /save/i });
//   await userEvent.click(saveButton);

//   expect(screen.getByText("pop")).toBeInTheDocument();
//   expect(screen.getByText("blues")).toBeInTheDocument();
//   expect(screen.getByText("jazz")).toBeInTheDocument();
// });
// });
// });
