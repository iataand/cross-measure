describe("Google", function () {
  it("Should create a new profile", function () {
    cy.visit("http://localhost:3000/");

    // cy.callFirestore("add", "test_hello_world", { some: "value" });

    // cy.login();

    cy.setCookie("AuthToken", Cypress.env("AUTH_COOKIE"));

    cy.visit("http://localhost:3000/create-profile/band");

    // cy.contains("Log in").should("be.visible");

    // cy.contains(/create account/i).click();

    // cy.contains(/log in with phone number/i).click();

    // cy.contains(/I am a band/i).click();

    // cy.get('input[name="bandName"]').type("Band Name Test");

    // cy.get('input[name="email"]').type("test@test.com");

    // cy.get("textarea").type("this is a bio test");

    // cy.get("select").select("Albania", { force: true });

    // cy.get("button[type='submit']").click();
  });
});
