describe("Google", function () {
  beforeEach(function () {});

  it("shows onboarding", function () {
    cy.visit("http://localhost:3000/");
    cy.contains("Log in").should("be.visible");
    // cy.loginByGoogleApi();
    cy.contains(/create account/i).click();
    // cy.loginByGoogleApi();
    cy.contains(/login with google/i).click();
    cy.window().then((win) => {
      // win is the remote window
    });
  });
});
