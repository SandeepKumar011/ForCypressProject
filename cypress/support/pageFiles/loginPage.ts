class LoginPage {
  private usernameInput = "input[placeholder='jonas_kahnwald@gmail.com']";
  private passwordInput = "input[placeholder='•••••••••']";
  private productTitle = "//h3[contains(text(), 'Dashboard')]";

  visit() {
    cy.visit("/");
  }

  enterUsername(username: string) {
    cy.get(this.usernameInput).type(username);
  }

  enterPassword(password: string) {
    cy.get(this.passwordInput).type(password);
  }

  clickLogin() {
    cy.get('span').contains('Sign In',{ timeout: 15000 }).click();
  }

  verifyLoginSuccess() {
   cy.get('span').contains('Create a New Job',{ timeout: 25000 }).should('be.visible');
  }
}

export default new LoginPage();
