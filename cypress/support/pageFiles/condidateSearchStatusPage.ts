import { faker } from '@faker-js/faker';
const fakeName = faker.person.fullName();

class CondidateSearchPage {
  private condidateIcon = "img[alt='Candidates icon']";

  clickOnjobIcon() {
    cy.get(this.condidateIcon).click();
  }

  openStatusDrop() {
    cy.xpath("//span[@class='text-[14px] truncate']",{ timeout: 3000 }).click();
  }

  selectShortlisted() {
    cy.xpath("//span[contains(text(),'Shortlisted')]").click();
  }

   selectSearchButton() {
    cy.xpath("//button[contains(text(),'Search')]").click();
  }

   firstNameAvailable() {
    cy.xpath('//tbody/tr[1]/td[3]',{ timeout: 3000 }).should('be.visible');
  }

  condidateUrlValidation() {
   cy.url().should('include', 'candidates');
  }
}

export default new CondidateSearchPage();
