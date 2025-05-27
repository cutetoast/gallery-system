@photo-management @integration
Feature: Photo Management
  As a gallery user
  I want to manage photos within albums
  So that I can organize and share my memories

  Background:
    Given the gallery system is running
    And I am authenticated as a user
    And I have an existing album

  @critical
  Scenario: Upload photo to album
    When I upload a photo with the following details:
      | filename | vacation.jpg |
      | title    | Beach Sunset |
      | size     | 1024KB      |
    Then the photo should be added to the album
    And a thumbnail should be generated