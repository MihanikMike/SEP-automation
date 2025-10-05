@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: User provides all fields
        Then user enters valid information for all fields
        Then user should be able to click the next button on step one
        
    
    Scenario: User provides only required fields
        Then user enters valid information for required fields
        Then user should be able to click the next button on step one