Feature: Check Forget password function

  Background: Open login page
    Given Open login page
    Then  Login page is opened
    And   Check elements form
    When Click on Forget password
    Then Forget password page is opened


  Scenario: Check Forget password (if email is empty)
    When Set email 'test'
    And Clear email field
    And Click on Reset button
    Then Show Email is required message

  Scenario: Check Forget password (if invalid email)
    When Set email 'test'
    And Click on Reset button
    Then Show Please enter a valid email address message

  Scenario: Check Forget password (if email isn't present)
    When Set email 'test@test.com'
    And Click on Reset button
    Then Show User with email test@test.com is not registered message



