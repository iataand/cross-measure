import { expect, it, describe, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Landing Page", () => {
  beforeAll(() => {
    render(<Page />);
  });

  it("should render logo text", async () => {
    const logoText = screen.getByText("CrossMeasure");

    expect(logoText).toBeDefined();
  });

  it("should open create account modal", async () => {
    const loginButton = await screen.getByText(/create account/i, {
      selector: "button",
    });
    await loginButton.click();

    const modalTitle = await screen.getByText(/create account/i, {
      selector: "h2",
    });

    expect(modalTitle).toBeDefined();
  });

  it("should open login modal", async () => {
    const loginButton = await screen.getAllByText(/log in/i, {
      selector: "button",
    });
    await loginButton[0]?.click();

    const modalTitle = await screen.getByText(/get started/i, {
      selector: "h2",
    });

    expect(modalTitle).toBeDefined();
  });
});
