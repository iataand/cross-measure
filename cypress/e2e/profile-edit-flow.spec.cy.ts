describe("Create and edit a test profile", () => {
  beforeEach(() => {
    cy.login();
    cy.setCookie("sessionCookie", Cypress.env("SESSION_COOKIE"));
  });

  it("create a test profile and then edit it and assert the new changes", () => {
    cy.visit("/create-profile/band");

    cy.get('input[name="bandName"]').type("Test band name");

    cy.get('textarea[name="bio"]').type(
      "This is a test bio. We are testing and this is a bio.",
    );

    cy.get("select").select("Germany", { force: true });

    cy.get("[data-cy='submit']").as("btn").click();
    cy.get("@btn").should("not.be", "visible");

    cy.contains(
      'textarea[name="bio"]',
      "This is a test bio. We are testing and this is a bio.",
    );

    cy.get('[data-cy="edit-profile-button"]').as("btn").click();
    cy.get("@btn").should("not.be", "visible");

    cy.get('[data-cy="edit-name-input"]').type("Name band test");

    cy.get('[data-cy="edit-bio-input"]')
      .clear()
      .type("test bio numero 2 goes here");

    cy.get('[data-cy="save-profile"]').as("btn").click();
    cy.get("@btn").should("not.be", "visible");

    cy.contains('[data-cy="band-name"]', "Name band test");

    cy.contains('[data-cy="band-bio"]', "test bio numero 2 goes here");

    cy.get('[data-cy="edit-profile-button"]').as("btn").click();
    cy.get("@btn").should("not.be", "visible");

    cy.get('[data-cy="delete-profile"]').as("btn").click();
    cy.get("@btn").should("not.be", "visible");

    cy.url().should("contain", "/create-profile/band");
  });
});
