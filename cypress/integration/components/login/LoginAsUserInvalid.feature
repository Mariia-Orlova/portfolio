Feature: Auth to Tech2B as  user
  Using invalid values

  Background: Open login page
    Given Open login page
    Then  Check elements form

  Scenario: Check logged if user nothing fills
     And  Click on log in button
     Then Validation is shown on screen

  Scenario Outline: Check logged to Tech2B as User using invalid values
    When Set username "<UserName>" invalid
    And Set password "<PassWord>" invalid
    And Click on log in button
    And Auth is unsuccessfully because is displayed error message

    Examples:
      | UserName | PassWord
      | test     | test