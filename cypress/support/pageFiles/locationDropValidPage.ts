import { faker } from '@faker-js/faker';
const fakeName = faker.person.fullName();

class LocationDropPage {
  private jobIcon = "img[alt='Job Openings icon']";
  private searchField = "input[placeholder='Search for a job']";
  private uploadResume = "img[alt='Add Your Own Candidates']";
 

  clickOnjobIcon() {
    cy.get(this.jobIcon).click();
  }

   jobOpeningUrlValidation() {
   cy.url().should('include', 'jobopening');
  }

  openLocDrop() {
    cy.xpath("//span[normalize-space(text())='Locations']",{ timeout: 3000 }).click();
  }

  dropdownValuesList(){
 cy.xpath("//div[@class='space-y-1']")
  .each(($el, index, $list) => {
    // Log each dropdown text in console
    cy.wrap($el).invoke('text').then((text) => {
      cy.log(text.trim()); // Logs in Cypress runner
      console.log(text.trim()); // Logs in browser console
    });
  })
  .then(() => {
    // Now click the "Open" option
   cy.xpath("//span[normalize-space(text())='Oman']",{ timeout: 7000 }).click();
    cy.xpath("//h3[normalize-space(text())='Job Openings']",{ timeout: 7000 }).click();
    cy.xpath('//tbody/tr[1]/td[3]',{ timeout: 7000 }).should('be.visible');
  });
  }

  firstNameAvailable() {
    cy.xpath('//tbody/tr[1]/td[3]',{ timeout: 7000 }).should('be.visible');
  }

}

export default new LocationDropPage();
 