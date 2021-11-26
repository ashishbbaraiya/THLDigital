Feature: Google Search for Campervans

    I want to google search for various Campervans of our company.

    Scenario: Google Search 'Maui'
        Given I navigate to Google
        When I search for 'Maui'
        Then I should have a link ‘maui-rentals.com’ in the returns results

    Scenario: Google Search 'Britz'
        Given I navigate to Google
        When I search for 'Britz'
        Then I should have a link ‘britz.com’ in the returns results