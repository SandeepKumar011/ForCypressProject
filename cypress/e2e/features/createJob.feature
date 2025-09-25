Feature: create job functionality

  Scenario: Successful login and create job
    Given I open the login page
    When user enter the credentials for login
    Then I should see the products page
    When user select the create job on dashboard page
    And user enter the job infomation and submit
    Then verify job created Successfully message
