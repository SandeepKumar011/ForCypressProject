import { faker } from '@faker-js/faker';
const fakeName = faker.person.fullName();

class ApplyJobPage {
  private jobIcon = "img[alt='Job Openings icon']";
  private searchField = "input[placeholder='Search for a job']";
  private uploadResume = "img[alt='Add Your Own Candidates']";
 

  clickOnjobIcon() {
    cy.get(this.jobIcon).click();
  }

  searchJobName(jobName: string) {
  cy.get(this.searchField).should('be.visible').type(jobName);
}

  selectSearchedJob() {
     cy.xpath("(//div[@class='flex flex-col']//span)[1]", { timeout: 9000 })
    .should('be.visible')
    .click();
  }

  checkingActiveInactive(){
     cy.log('Checking for the active');
      cy.wait(5000);
   cy.get('input.sr-only.peer').then(($input) => {
  if (!$input.is(':checked')) {
    // If inactive, click toggle switch
    cy.xpath("//input[@class='sr-only peer']/following-sibling::div",{ timeout: 7000 })
      .click({ force: true });

    // Click Confirm button
    cy.xpath("//button[normalize-space(text())='Confirm']",{ timeout: 7000 })
      .click({ force: true });
  }
  else{
     cy.log('Job is already active');
  }
});
  }

  openUploadImage(){
     cy.xpath("//span[normalize-space(text())='Upload Resumes']").click();
  }

  uploadImage(){
   cy.wait(3000);
   cy.get('input[type="file"]').selectFile('cypress/data/uploadFile.pdf', { force: true });
  }

  closePopup() {
    cy.wait(3000);
    cy.xpath("//button[normalize-space(text())='Close']").click();
  }


}

export default new ApplyJobPage();
