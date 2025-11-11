import { faker } from '@faker-js/faker';
const fakeName = faker.person.fullName();

class JobCondidatePage {
  private condidateIcon = "img[alt='Candidates icon']";

  clickOnjobIcon() {
    cy.get(this.condidateIcon).click();
  }

  openJobDrop() {
    cy.xpath("//span[@class='truncate max-w-[170px] block cursor-pointer']",{ timeout: 3000 }).click();
  }

  selectAllJobs() {
    cy.xpath("//button[contains(text(),'All Jobs')]",{ timeout: 3000 }).click();
  }

   selectSearchButton() {
    cy.xpath("//button[contains(text(),'Search')]").click();
  }

   firstNameAvailable() {
    cy.xpath('//tbody/tr[1]/td[3]',{ timeout: 3000 }).should('be.visible');
  }

  listValidation() {
    cy.wait(3000);
 cy.xpath('//tbody/tr[1]/td[3]', { timeout: 3000 })
  .then(($el) => {
    if ($el.is(':visible')) {
      cy.log('List is available in list');
    } else {
      cy.log('List is not available in list');
    }
  });
}

  condidateUrlValidation() {
   cy.url().should('include', 'candidates');
  }

  //==============================location=================================//
  openLocDrop() {
    cy.wait(5000);
    cy.xpath("//span[normalize-space(text())='Match %']",{ timeout: 7000 }).click();
  }

  selectLocation() {
    cy.xpath("//button[contains(text(),'Location')]",{ timeout: 3000 }).click();
  }
}

export default new JobCondidatePage();
