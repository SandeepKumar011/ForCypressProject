Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
  return cy.url().should('include', '/inventory.html') as unknown as Cypress.Chainable<Element>;
});