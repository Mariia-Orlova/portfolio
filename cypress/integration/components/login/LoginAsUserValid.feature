Feature: Auth to Tech2B as  user
  Using valid value

  Scenario: Check auth to Tech2B as user using valid value
    Given Open login page
    Then  Check elements form
    When Set username
    And Set password
    And Check Remember Me
    And Click on log in button
    Then Auth is successfully

