Feature:  Create new supple in Supple and Demand page and invite non Tech2b Companies


  Background: Check elements for Login page
    Given Open login page
    Then  Login page is opened
    And   Check elements form
    When Set username 'techb2bdemochalkostechnology@gmail.com'
    And Set password 'techb2b_demo_CHALKOSTECHNOLOGY_123456789'
    And Check Remember Me
    And Click on log in button
    Then Auth is successfully
    When Open Supple and Demand page
    Then Supple and Demand page is opened


  Scenario Outline: Create new supple with Products-Manually
    When Click on Create button in Supple in Supple and Demand page
    Then Create Request for Quotation page is opened
    When Select Supple radiobutton
    And Fill fields for General tab: Title "<Title>"
    And Fill fields for General tab: InternalID "<InternalID>"
    And Fill fields for General tab: Contact
    And Fill fields for General tab: Contact preferences
    And Fill fields for General tab: Delivery date
    And Fill fields for General tab: Delivery condition
    And Fill fields for General tab: Quotation deadline
    And Fill fields for General tab: Maximum number of quotations "<Maximumnumberofquotations>"
    And Fill fields for General tab: What is your purpose for this RFQ?
    And Fill fields for General tab: Description "<Description>"
    And Fill data for Expertise tab
    And Fill Manually data for Products tab
    And Fill data for Publication tab
    And Invite non Tech2b Companies for Publication tab: InviteEmails "<InviteEmails>"
    And Fill Matchmaker tab
    And Click on Create button
    Then Requests page is opened
    And New supple is displayed on screen "<Title>"

    Examples:

      | Title             | InternalID | Maximumnumberofquotations  | Description | InviteEmails | Public
      | Text for supple with product manually   | 2132       | 23    | more description | test@gmail.com | test