Feature: Open Companies page

  Background: Check elements for Login page
    Given Open login page
    Then  Login page is opened
    And   Check elements form
    When Set username 'techb2bdemochalkostechnology@gmail.com'
    And Set password 'techb2b_demo_CHALKOSTECHNOLOGY_123456789'
    And Check Remember Me
    And Click on log in button
    Then Auth is successfully


    Scenario: Check company form for Companies page
      When Open Companies page
      Then Companies page is opened
      And Open Company form
      And Check General Tab
      And Check Description


