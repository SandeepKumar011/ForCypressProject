declare namespace Cypress {
  interface Chainable {
    typeInCkEditor(text: string): Chainable<void>;
  }
}
