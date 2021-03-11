Feature: Open Supple and Demand page

  Background: Check elements for Login page
    Given Open login page
    Then  Login page is opened
    And   Check elements form
    When Set username 'techb2bdemochalkostechnology@gmail.com'
    And Set password 'techb2b_demo_CHALKOSTECHNOLOGY_123456789'
    And Check Remember Me
    And Click on log in button
    Then Auth is successfully


    Scenario: Check elements for Supple and Demand page
      When Open Supple and Demand page
      Then Supple and Demand page is opened
