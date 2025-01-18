import LoginModal from "~/app/login-modal";
import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it } from "vitest";

describe("LoginModal", () => {
  beforeAll(() => {
    render(<LoginModal hasAccount={true} />);
  });

  it("should render login modal", async () => {
    const modalTitle = screen.findByText(/create account/);

    expect(modalTitle).toBeDefined();
  });
});
