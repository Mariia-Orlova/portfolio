Feature: Check Forget password function

  Background: Open login page
    Given Open login page
    Then  Login page is opened
    And   Check elements form

    Scenario: Open Forget password page
      When Click on Forget password
      Then Forget password page is opened
      And Check elements in forget password page

      Scenario: Check Forget password function
        When Click on Forget password
        Then Forget password page is opened
        When Fill email 'techb2bdemochalkostechnology@gmail.com'
        And Click on Reset button
        Then  Message was sent to mailbox


