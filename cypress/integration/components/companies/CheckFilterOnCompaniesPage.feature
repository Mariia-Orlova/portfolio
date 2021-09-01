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


    Scenario: Check elements for Companies page
      When Open Companies page
      Then Companies page is opened
      And Check Filters View mode
      And Check Filters Categories on Companies page
      And Check Filters Last active on Companies page
      And Check Filters Distance on Companies page
      And Check Filters City on Companies page
      And Check Filters Countries on Companies page
      And Check Filters Materials on Companies page
      And Check Filters Industries on Companies page
      And Check Filters Memberships on Companies page
      And Check Filters Certificate on Companies page
      And Check Filters Review score on Companies page
      And Check Filters Company type on Companies page
      And Check Filters Employees on Companies page
      And Check Filters Relationships on Companies page
      And Check Filters Production planning on Companies page
      And Check Filters Production size on Companies page
