import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import applyjobPage from "../pageFiles/applyJobPage";
import { ap } from "@faker-js/faker/dist/airline-CLphikKp";
const jobName="xander";

When("user select the job list", () => {
	applyjobPage.clickOnjobIcon();
});

When("user search the job", () => {
	applyjobPage.searchJobName(jobName);
	applyjobPage.selectSearchedJob();
});

Then("user apply the job as condidate", () => {
	cy.log('uploading resume PLEASE WAIT');
	applyjobPage.openUploadImage();
	applyjobPage.uploadImage();
	applyjobPage.closePopup();

});
