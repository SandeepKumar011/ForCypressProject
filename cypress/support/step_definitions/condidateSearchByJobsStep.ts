import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import condidateJobPage from "../pageFiles/condidateSearchByJobPage";

When(/^user select the job drop down and select search$/, () => {
	condidateJobPage.openJobDrop();
    condidateJobPage.selectAllJobs();
    condidateJobPage.selectSearchButton();
});

Then(/^user should be displayed as per search values for the jobs$/, () => {
	condidateJobPage.listValidation();
});
