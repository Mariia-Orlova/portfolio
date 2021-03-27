Feature:  Create new supple in Supple and Demand page


  Scenario Outline: Create new supple with Products-Generate
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
  When Click on Create button in Supple in Supple and Demand page
  Then Create Request for Quotation page is opened
  When Select Supple radiobutton
  And Fill fields for General tab: Title "<Title>"
  And Fill fields for General tab: InternalID "<InternalID>"
  And Fill fields for General tab: Maximum number of quotations "<Maximumnumberofquotations>"
  And Fill fields for General tab: Description,Contact,Contact preferences,Delivery date,Delivery condition,Quotation deadline
  And Fill data for Expertise tab
  And Fill Generate data for Products tab
  And Fill data for Publication tab
  And Fill Matchmaker tab
    And Click on Create button


    Examples:

      | Title             | InternalID | Maximumnumberofquotations  | Description
      | Text for supple   | 565        | 6565                        | more description




