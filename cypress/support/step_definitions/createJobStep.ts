import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import createjobPage from "../pageFiles/createJobPage";

When("user select the create job on dashboard page", () => {
     createjobPage.selectJobCreate();
});

When("user enter the job infomation and submit", () => {
     createjobPage.enterJobTitle('QaJOb');
     createjobPage.selectwriteYourown();
     createjobPage.enterJobId('21');
     createjobPage.selectLocation();
     createjobPage.enterOpeningNumber(7);
     cy.log('entering data');
     createjobPage.enterJobDesc();
     cy.log('entering data222');
     createjobPage.submitJob();

});

Then("verify job created Successfully message", () => {
     createjobPage.successMessage();
     createjobPage.closePopup()
});
