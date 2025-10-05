@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed. 

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    #TODO: Create scenarios that cover all the acceptance criteria

Background: 
    Given user is on the enrollment page
    And user completed the start application  step
    And user completed the paymant plan step

Scenario: Verify that an error message is displayed when the entered card number is invalid
    When user enters an invalid card number
    And user check the terns and conditions checkbox
    Then the card number error message "Your card number is invalid." is displayed

Scenario: Verify that an error message is displayed when the entered card number is too short
    When user enters a incomplete card number
    And user check the terns and conditions checkbox
        Then the card number error message "Your card number is incomplete." is displayed

