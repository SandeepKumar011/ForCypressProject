import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pageFiles/loginPage";

Given("I open the login page", () => {
  LoginPage.visit();
});

When("user enter the credentials for login", () => {
	LoginPage.enterUsername("jaimin.shah@avistatech.net");
  LoginPage.enterPassword("Bmc@1234");
  LoginPage.clickLogin();

});

Then("I should see the products page",() => {
  console.log("user is on dashboard page");
  LoginPage.verifyLoginSuccess();
});
