@Regression
Feature: Cucumber Mathematics

  Background:
    Given I have 5 cucumbers
    And I have 10 carrots

  @Scenario1
  Scenario: Let’s eat cucumbers!
    When I eat 4 cucumbers
    Then I have 1 cucumber

  @Scenario2
  Scenario: Let’s eat carrots!
    When I eat 12 carrots
    Then I have -2 carrots

  @Scenario3
  Scenario: Let’s make a salad!
    Given I have 8 cucumbers
    And I have 5 carrots
    When I make a salad with 3 cucumbers and 2 carrots
    Then I have 5 cucumbers
    And I have 3 carrots
    Then I have 1 salad