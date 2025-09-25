Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I open the login page
    When user enter the credentials for login
    Then I should see the products page
