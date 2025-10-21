import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import condidatePage from "../pageFiles/condidateSearchStatusPage";

When(/^user select the condidate icon$/, () => {
	condidatePage.clickOnjobIcon();
});

When(/^user should be redirected to the condidate page$/, () => {
	condidatePage.condidateUrlValidation();
});

When(/^user select the status and select search$/, () => {
	condidatePage.openStatusDrop();
    condidatePage.selectShortlisted();
    condidatePage.selectSearchButton();

});

Then(/^user should be displayed as per search values$/, () => {
	condidatePage.firstNameAvailable();
});
