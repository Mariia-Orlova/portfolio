Feature:  Create new supple in Supple and Demand page


  Scenario Outline: Create new Demand without Products
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
  When Select Demand radiobutton
  And Fill fields for General tab: Title "<Title>"
  And Fill fields for General tab: InternalID "<InternalID>"
  And Fill fields for General tab: Maximum number of quotations "<Maximumnumberofquotations>"
  And Fill fields for General tab: Description,Contact,Contact preferences,Delivery date,Delivery condition,Quotation deadline
  And Fill data for Expertise tab
  And Fill data for Publication tab
  And Click on Create button
  Then Requests page is opened
  And New Demand is displayed on screen "<Title>"

    Examples:

      | Title                  | InternalID | Maximumnumberofquotations     | Description          | Contact
      | Title for demand       | 565        | 6565                          | more description     | As


