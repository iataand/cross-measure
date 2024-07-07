import CreateProfile from "@/app/create-profile/[currentProfileId]/page";
import Page from "@/app/create-profile/[currentProfileId]/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("../app/create-profile/actions", () => jest.fn());

describe("CreateProfile", () => {
  it("renders a submit button", () => {
    render(<CreateProfile currentProfileId="" />);

    const submitButton = screen.getByRole("button", {
      name: /create profile/i,
    });

    expect(submitButton).toBeInTheDocument();
  });
});
