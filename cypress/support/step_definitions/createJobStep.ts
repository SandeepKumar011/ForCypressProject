import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import createjobPage from "../pageFiles/createJobPage";
import { faker } from '@faker-js/faker';
const numberOfOpening = faker.number.int({ min: 1, max: 100 });
const jodId = faker.number.int({ min: 1, max: 100 });
const firstName=faker.internet.username

When("user select the create job on dashboard page", () => {
     createjobPage.selectJobCreate();
});

When("user enter the job infomation and submit", () => {
     createjobPage.enterJobTitle(faker.person.firstName());
     createjobPage.selectwriteYourown();
     createjobPage.enterJobId( faker.number.int({ min: 1, max: 100 }));
     createjobPage.selectLocation();
     createjobPage.enterOpeningNumber(faker.number.int({ min: 1, max: 100 }));
     createjobPage.enterJobDesc();
     createjobPage.submitJob();

});

Then("verify job created Successfully message", () => {
     createjobPage.successMessage();
     createjobPage.closePopup()
});
