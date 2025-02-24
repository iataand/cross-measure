Cypress.Commands.add("setAuthCookie", () => {
  cy.setCookie("sessionCookie", Cypress.env("sessionCookie"));
});
