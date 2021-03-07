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
        When Fill email 'techb2bdemochalkostechnology@gmail.com'
        Then  Message was sent to mailbox


        Scenario: Check Forget password (negative scenarios)



