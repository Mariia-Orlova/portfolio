Feature: Add campaign in admin panel


  Background: Check auth for admin page
    Given Admin is logged in

  Scenario: Create Campaign in admin
    When Click on Add content button
    And Click on Campaign link
    And Fill General tab for Campaign content
    And Fill Main banner tab for Campaign content
    And Fill Widgets tab
    And Fill Details information tab for Campaign content
    And Fill Subscription tab for Campaign content
    And Click on Save button
    Then Open front page



