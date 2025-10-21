Feature: apply job functionality

  Scenario: apply job as condidate
    Given I open the login page
    When user enter the credentials for login
    Then I should see the products page
    When user select the job list
    And  user search the job
    Then user apply the job as condidate
