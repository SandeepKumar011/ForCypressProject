Feature: search by location functionality

  Scenario: search condidate by location 
     Given I open the login page
    When user enter the credentials for login
    Then I should see the products page
    When user select the condidate icon
    And  user should be redirected to the condidate page
    And  user select the location drop down and select search
    Then user should be displayed as per search values for the jobs
