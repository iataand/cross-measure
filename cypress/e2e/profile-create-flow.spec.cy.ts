describe("Profile create flow", function() {
  before(() => {
    cy.login();
    cy.setCookie("sessionCookie", Cypress.env("SESSION_COOKIE"));
  });

  it("should create a new account with a test email and delete it when it's done", async function() {
    //TODO: add testing for genres as well
    cy.visit("/create-profile/band");

    cy.get('input[name="bandName"]').type("Test band name");

    cy.get('textarea[name="bio"]').type(
      "This is a test bio. We are testing and this is a bio.",
    );

    cy.get("select").select("Germany", { force: true });

    cy.get("[data-cy='submit']").as("btn").click();
    cy.get("@btn").should("not.be", "visible");

    cy.contains('[data-cy="band-name"]', "Test band name");

    cy.contains(
      '[data-cy="band-bio"]',
      "This is a test bio. We are testing and this is a bio.",
    );

    cy.get('[data-cy="edit-profile-button"]').as("btn").click();
    cy.get("@btn").should("not.be", "visible");

    cy.get('[data-cy="delete-profile"]').as("btn").click();
    cy.get("@btn").should("not.be", "visible");

    cy.url().should("contain", "/create-profile/band");
  });
});
