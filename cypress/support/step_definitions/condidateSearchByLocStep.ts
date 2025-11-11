import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import condidateJobPage from "../pageFiles/condidateSearchByJobPage";

When(/^user select the location drop down and select search$/, () => {
	condidateJobPage.openLocDrop();
    condidateJobPage.selectLocation();
    condidateJobPage.selectSearchButton();
});
