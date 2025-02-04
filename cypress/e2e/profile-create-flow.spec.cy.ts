describe("Profile create flow", function () {
  it("should create a new account with test email", function () {
    cy.visit("http://localhost:3000/");

    cy.setCookie("AuthToken", Cypress.env("AUTH_COOKIE"));

    cy.visit("http://localhost:3000/create-profile/band");

    cy.get('input[name="bandName"]').type("Band Name Test");

    cy.get("textarea").type("this is a bio test");

    cy.get("select").select("Albania", { force: true });

    cy.get("button[type='submit']").click();

    cy.get("[data-cy='edit-genres']").click();

    cy.get("[data-cy='rock']").click();
    cy.get("[data-cy='rap']").click();
    cy.get("[data-cy='pop']").click();
    cy.get("[data-cy='techno']").click();

    cy.get("[data-cy='save']").click();
  });
});
