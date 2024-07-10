import CreateProfile from "@/app/create-profile/[currentProfileId]/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

jest.mock("../app/create-profile/[currentProfileId]/actions", () => jest.fn());
// jest.mock("react-dom", () => ({ useFormState: jest.fn() }));
jest.mock("react-dom", () => ({
  render: jest.fn(),
}));

describe("CreateProfile", () => {
  it("renders a submit button", async () => {
    render(
      await (
        <CreateProfile
          params={{
            currentProfileId: "123",
          }}
        />
      ),
    );

    const submitButton = screen.getByRole("button", {
      name: /create profile/i,
    });

    expect(submitButton).toBeInTheDocument();
  });

  // it("should select band in the dropdown and display autocomplete and labels", async () => {
  //   expect(true).toBe(true);
  //   render(
  //     await (
  //       <CreateProfile
  //         params={{
  //           currentProfileId: "1334d882-1091-7044-a803-cf6bc4edbee2",
  //         }}
  //       />
  //     ),
  //   );
  //   const select = screen.getByPlaceholderText(/select a profile type/i);

  //   expect(select).toBeInTheDocument();
  // });
});
