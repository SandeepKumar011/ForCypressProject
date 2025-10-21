import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import statusdropPage from "../pageFiles/statusDropValidaPage";
import { statSync } from "fs";


When(/^user select the job icon$/, () => {
	statusdropPage.clickOnjobIcon();
});

When(/^user should be redirected to the job page$/, () => {
	statusdropPage.jobOpeningUrlValidation()
});

When(/^user select the status drop down$/, () => {
	statusdropPage.openStatusDrop();
});

When(/^user check the drop down values available$/, () => {
	cy.log('need to check drop down values');
    statusdropPage.dropdownValuesList();
    statusdropPage.firstNameAvailable();

});
