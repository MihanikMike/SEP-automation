@sep14
Feature: Selecting a price plan

    As a customer, I want to be able to Choose a payment plan from the available options 
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user completed the start application step

    Scenario: Selecting the Upfront payment plan highlights the option
        When user selects upfront payment plan
        Then the upfront payment option should be highlighted

    Scenario: Selecting the Installments payment plan activates the 'Next' button
        When user selects installments payment plan
        Then the next button on step two should be enabled

    Scenario: Changing plan selection before finalizing
        When user selects upfront payment plan
        And user selects installments payment plan
        And user selects upfront payment plan