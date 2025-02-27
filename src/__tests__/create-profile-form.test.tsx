import { it, describe, expect, beforeAll, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProfileForm from "~/app/create-profile/band/profile-form";
import user from "@testing-library/user-event";
import { AppRouterContextProviderMock } from "./mocks/app-router-context-provider-mock";

const mockedCountries = [
  {
    id: 11,
    name: "Afghanistan",
  },
  {
    id: 12,
    name: "Aland Islands",
  },
  {
    id: 13,
    name: "Albania",
  },
  {
    id: 14,
    name: "Algeria",
  },
  {
    id: 15,
    name: "American Samoa",
  },
  {
    id: 16,
    name: "Andorra",
  },
  {
    id: 17,
    name: "Angola",
  },
  {
    id: 18,
    name: "Anguilla",
  },
  {
    id: 19,
    name: "Antarctica",
  },
  {
    id: 20,
    name: "Antigua And Barbuda",
  },
];

describe("Create profile form", () => {
  beforeAll(() => {
    const push = vi.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <ProfileForm
          countries={mockedCountries}
          userId={"asd"}
          email="test@example.com"
        />
      </AppRouterContextProviderMock>,
    );
  });

  it("should render the band name field correctly", () => {
    const bandNameInput = screen.getByRole("textbox", { name: /band name/i });

    expect(bandNameInput).toBeInTheDocument();
  });

  it("should try to submit an empty form", async () => {
    clickSubmitButton();

    const errorBioText = await screen.findByText(/bio is required/i);
    const errorCountryText = await screen.findByText(/country is required/i);
    const errorNameText = await screen.findByText(/band name is required/i);

    expect(errorBioText).toBeInTheDocument();
    expect(errorCountryText).toBeInTheDocument();
    expect(errorNameText).toBeInTheDocument();
  });
});

function clickSubmitButton() {
  user.click(screen.getByRole("button", { name: /submit/i }));
}
