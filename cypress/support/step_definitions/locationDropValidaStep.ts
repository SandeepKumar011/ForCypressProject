import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import locdropPage from "../pageFiles/locationDropValidPage";


When(/^user select the Location drop down$/, () => {
	locdropPage.openLocDrop();
});

When(/^user check the drop down values available for Location$/, () => {
	cy.wait(5000);
	locdropPage.dropdownValuesList();
});

Then(/^verify search by location values to be displayed$/, () => {
	cy.wait(7000);
	locdropPage.firstNameAvailable();
});
