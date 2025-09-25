import { faker } from '@faker-js/faker';
const fakeName = faker.person.fullName();

class LoginPage {
  private jobTitle = "input[placeholder='Enter the job title with relevancy']";
  private jobId = "input[placeholder='JD-001']";
  private openingNumber = "input[placeholder='2']";
  private jobDescription = "//p[@data-placeholder='Enter your JD here...']";
  private sendButton="//img[@alt='Send-Icon']"

  visit() {
    cy.visit("/");
  }

  enterJobTitle(jobtitle: string) {
    cy.get(this.jobTitle).type(jobtitle);
  }

  enterOpeningNumber(num:any) {
    cy.get(this.openingNumber).type(num);
  }

  enterJobDesc() {
   cy.log('ENTERING JOB DESCRIPTION PLEASE WAIT');
   cy.wait(1000);
  cy.get('.ck-content[contenteditable=true]')
  .realClick()                        

// type new text
cy.get('.ck-content[contenteditable=true]')
  .realType(fakeName)

// verify
cy.get('.ck-content[contenteditable=true] p')
  .should('have.text', fakeName)
};

  submitJob(){
    cy.xpath(this.sendButton,{ timeout: 1000 }).click();
  }


  selectJobCreate() {
   cy.get('span').contains('Create a New Job',{ timeout: 25000 }).click();
  }

  selectwriteYourown() {
   cy.get('button').contains('Write your own').click();
  }

  enterJobId(jobId: any) {
    cy.get(this.jobId).type(jobId);
  }

  selectLocation(){
    cy.get('span').contains('Select a location').click();
    cy.get('button').contains('Bahrain').click();
  }


  successMessage() {
   cy.get('span').contains('Job Submitted Successfully',{ timeout: 25000 }).should('be.visible');
  }

  closePopup(){
    cy.get('button').contains('×').click();
  }
}

export default new LoginPage();
