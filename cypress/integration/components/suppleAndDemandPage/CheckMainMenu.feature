Feature:  Check elements for main menu

  Background: Check elements for Login page
    Given Open login page
    Then  Login page is opened
    And   Check elements form
    When Set username 'techb2bdemochalkostechnology@gmail.com'
    And Set password 'techb2b_demo_CHALKOSTECHNOLOGY_123456789'
    And Check Remember Me
    And Click on log in button
    Then Auth is successfully

  Scenario: Check elements for main menu
    Then Check logo
    And Check Main Menu block
    And Check Supple and Demand link
    And Check Companies link
    And Check Dashboard link
    And Check Request link
    And Check Quotation link
    And Check Order link
    And Check Invoice link
    And Check Messages link
    And Check My company link
    And Check Files link
    And Check Products link