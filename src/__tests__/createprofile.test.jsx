import CreateProfile from "@/app/create-profile/[currentProfileId]/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { useFormState } from "react-dom";

jest.mock("../app/create-profile/[currentProfileId]/actions", () => jest.fn());
jest.mock("react-dom", () => ({ useFormState: jest.fn() }));

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
});
