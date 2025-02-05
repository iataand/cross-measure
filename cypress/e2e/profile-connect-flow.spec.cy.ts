describe("Connect profiles flow", () => {
  beforeEach(() => {
    cy.setCookie("AuthToken", Cypress.env("AUTH_COOKIE"));
  });
  it("should navigate to user profile", () => {
    cy.visit(`dashboard/profile/${Cypress.env("PROFILE_UID")}`);
    cy.get("[data-cy='connect']").should("be.enabled").click();
    cy.get("[data-cy='connect']").should("be.disabled");
  });
});
