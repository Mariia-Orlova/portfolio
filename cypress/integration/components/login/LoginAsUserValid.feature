Feature: Auth to Tech2B as  user
  Using valid value

  Background: Check elements for Login page
    Given Open login page
    Then  Login page is opened
    And   Check elements form


  Scenario: Check auth to Tech2B as user using valid value
    When Set username 'techb2bdemochalkostechnology@gmail.com'
    And Set password 'techb2b_demo_CHALKOSTECHNOLOGY_123456789'
    And Check Remember Me
    And Click on log in button
    Then Auth is successfully

