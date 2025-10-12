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
    cy.get(this.searchField).type(jobName);
  }

  selectSearchedJob() {
    cy.xpath("(//div[@class='flex flex-col']//span)[1]").click();
  }

  openUploadImage(){
     cy.xpath("//span[normalize-space(text())='Upload Resumes']").click();
  }

  uploadImage(){
   cy.wait(1000);
   cy.get('input[type="file"]').selectFile('cypress/data/uploadFile.pdf', { force: true });
  }

  closePopup() {
    cy.wait(1000);
    cy.xpath("//button[normalize-space(text())='Close']").click();
  }


}

export default new ApplyJobPage();
