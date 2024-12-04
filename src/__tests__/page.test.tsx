import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  it("should render logo text correctly", async () => {
    render(<Page />);
    const logoText = screen.findByText("CrossMeasure");

    expect(logoText).toBeDefined();
  });
});
