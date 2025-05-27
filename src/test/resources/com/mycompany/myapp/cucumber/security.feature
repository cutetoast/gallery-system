@security @integration
Feature: Security Management
  As a system administrator
  I want to ensure proper security controls
  So that the gallery system remains protected

  Background:
    Given the gallery system is running

  @smoke @critical
  Scenario: Successful user authentication
    When a user attempts to login with valid credentials
    Then they should be authenticated successfully
    And receive a valid JWT token

  @validation
  Scenario Outline: Invalid authentication attempts
    When a user attempts to login with <scenario>
    Then the authentication should fail
    And an appropriate error message should be shown

    Examples:
      | scenario |
      | invalid username |
      | invalid password |
      | expired credentials |