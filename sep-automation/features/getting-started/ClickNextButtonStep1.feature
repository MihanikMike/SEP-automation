@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: Proceed to step 2 by providing all fields in step 1
        Given user fills in all fields on step one with valid information
        When user clicks the next button on step one
        Then user should be navigated to step two

    Scenario: Proceed to step 2 by providing only required fields in step 1
        Given user fills in only the required fields on step one with valid information
        When user clicks the next button on step one
        Then user should be navigated to step two