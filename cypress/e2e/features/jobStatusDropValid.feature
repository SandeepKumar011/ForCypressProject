Feature: status drop down functionality

  Scenario: status drop down values validation
     Given I open the login page
    When user enter the credentials for login
    Then I should see the products page
    When user select the job icon
    And  user should be redirected to the job page
    And  user select the status drop down
    And  user check the drop down values available
