import { faker } from '@faker-js/faker';
const fakeName = faker.person.fullName();
const jobLocation='Oman'

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
    cy.xpath("//span[normalize-space(text())='Locations']",{ timeout: 7000 }).click();
  }

  dropdownValuesList(){
 cy.xpath("//div[@class='space-y-1']")
  .each(($el, index, $list) => {
    // Log each dropdown text in console
    cy.wrap($el).invoke('text').then((text) => {
      cy.log(text.trim()); 
      console.log(text.trim());
    });
  })
  .then(() => {
   cy.xpath(`//span[normalize-space(text())='${jobLocation}']`,{ timeout: 7000 }).click();
    cy.xpath("//h3[normalize-space(text())='Job Openings']",{ timeout: 7000 }).click();
    cy.xpath('//tbody/tr[1]/td[3]',{ timeout: 7000 }).should('be.visible');
  });
  }

  firstNameAvailable() {
    cy.xpath('//tbody/tr[1]/td[3]',{ timeout: 7000 }).should('be.visible');
  }

}

export default new LocationDropPage();
 