Cypress.Commands.add('typeInCkEditor', (text: string) => {
  cy.get('div.ck-editor__editable[contenteditable="true"]')
    .click()
    .then($div => {
      $div[0].innerHTML = `<p>${text}</p>`;
      $div[0].dispatchEvent(new Event('input', { bubbles: true }));
      $div[0].dispatchEvent(new Event('change', { bubbles: true }));
    });
});
