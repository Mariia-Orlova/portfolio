Feature: Auth to Tech2B as  user
  Using invalid values

  Background: Open login page
    Given Open login page
    Then  Check elements form

  Scenario: Check logged if user nothing fills
     And Click on log in button
     Then Validation is shown on screen

  Scenario: Check logged to Tech2B as User using invalid values
    When Set username invalid
    And Set password invalid
    And Click on log in button
    Then Auth is unsuccessfully

