Feature: View Gallery Albums

  Scenario: View albums sorted by event
    Given the user is on the gallery page
    When the user selects "Event" sorting
    Then albums should be displayed grouped by event name
    And albums with no event should be under "Miscellaneous"

  Scenario: View albums sorted by date
    Given the user is on the gallery page
    When the user selects "Date" sorting
    Then albums should be displayed in chronological order
    And most recent albums should appear first