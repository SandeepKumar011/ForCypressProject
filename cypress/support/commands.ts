/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to login to the application
       * @example cy.login('username', 'password')
       */
      login(username: string, password: string): Chainable<Element>;
      
      /**
       * Custom command to logout from the application
       * @example cy.logout()
       */
      logout(): Chainable<Element>;
      
      /**
       * Custom command to wait for page load
       * @example cy.waitForPageLoad()
       */
      waitForPageLoad(): Chainable<Element>;
      
      /**
       * Custom command to check if element is visible
       * @example cy.isVisible('selector')
       */
      isVisible(selector: string): Chainable<Element>;
      
      /**
       * Custom command to check if element is not visible
       * @example cy.isNotVisible('selector')
       */
      isNotVisible(selector: string): Chainable<Element>;

       typeInCkEditor(text: string): Chainable<void>;
    }
  }
}

// Export to make it a module
export {};
