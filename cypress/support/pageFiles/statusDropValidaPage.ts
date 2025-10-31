import { faker } from '@faker-js/faker';
const fakeName = faker.person.fullName();
const jobStatus='Open'

class StatusDropPage {
  private jobIcon = "img[alt='Job Openings icon']";
  private searchField = "input[placeholder='Search for a job']";
  private uploadResume = "img[alt='Add Your Own Candidates']";
 

  clickOnjobIcon() {
    cy.get(this.jobIcon).click();
  }

   jobOpeningUrlValidation() {
   cy.url().should('include', 'jobopening');
  }

  openStatusDrop() {
    cy.xpath("//span[normalize-space(text())='Status']",{ timeout: 3000 }).click();
  }

  dropdownValuesList(){
 cy.get('div.absolute.z-10.mt-0.bg-white.border.border-gray-200.rounded-md.shadow-lg.w-full button')
  .each(($el, index, $list) => {
    // Log each dropdown text in console
    cy.wrap($el).invoke('text').then((text) => {
      cy.log(text.trim()); // Logs in Cypress runner
      console.log(text.trim()); // Logs in browser console
    });
  })
  .then(() => {
    cy.wait(5000);
    cy.contains('button', 'Open').click();
    cy.xpath('//tbody/tr[1]/td[3]',{ timeout: 7000 }).should('be.visible');
    cy.wait(5000);
    cy.xpath(`//span[normalize-space(text())='${jobStatus}']`,{ timeout: 3000 }).click();
    cy.contains('button', 'Closed').click();
     cy.xpath('//tbody/tr[1]/td[3]',{ timeout: 7000 }).should('be.visible');
  });
  }

  firstNameAvailable() {
    cy.xpath('//tbody/tr[1]/td[3]',{ timeout: 7000 }).should('be.visible');
  }

}

export default new StatusDropPage();
