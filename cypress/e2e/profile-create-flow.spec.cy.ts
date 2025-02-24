describe("Profile create flow", function () {
  before(() => {
    cy.login();
  });

  it("should create a new account with test email", async function () {
    cy.visit("/");

    cy.setCookie("sessionCookie", Cypress.env("SESSION_COOKIE"));

    cy.visit("/dashboard/connections");

    cy.get('[data-cy="profile-picture"]').click();

    cy.get('[data-cy="edit-profile-button"]').click();

    cy.get('[data-cy="edit-name-input"]').type("test band name");

    cy.get('[data-cy="edit-bio-input"]').clear().type("test bio goes here");

    cy.get('[data-cy="save-profile-button"]').as("btn").click();
    cy.get("@btn").should("not.be", "visible");

    cy.get('[data-cy="band-name"]').should("contain", "test band name");

    cy.contains("test bio goes here");
  });
});
