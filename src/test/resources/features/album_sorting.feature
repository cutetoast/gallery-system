Feature: Album Sorting

  Scenario: View albums sorted by event
    Given the user has multiple albums
    When the user selects to sort by "Event"
    Then the albums should be displayed in alphabetical order by event name
    And albums with no event should be grouped under "Miscellaneous"

  Scenario: View albums sorted by date
    Given the user has multiple albums
    When the user selects to sort by "Date"
    Then the albums should be displayed in chronological order
    And the most recent albums should appear first