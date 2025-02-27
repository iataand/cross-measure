import { it, describe, beforeAll, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import { AppRouterContextProviderMock } from "./mocks/app-router-context-provider-mock";

describe("Landing Page", () => {
  beforeAll(() => {
    const push = vi.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <Page />
      </AppRouterContextProviderMock>,
    );
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

  it("should close modal", async () => {
    const closeButton = screen.getByRole("button", { name: /close/i });
    const modalTitle = screen.getByText(/get started/i, {
      selector: "h2",
    });
    await closeButton.click();
    expect(modalTitle).not.toBeInTheDocument();
  });
});
