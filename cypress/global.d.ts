declare namespace Cypress {
  interface Chainable {
    setAuthCookie(): Chainable<void>;
  }
}
