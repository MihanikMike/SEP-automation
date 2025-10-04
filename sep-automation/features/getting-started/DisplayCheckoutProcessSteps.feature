@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
    
    Scenario: Display all checkout process steps
        Then the system should display "Start Application" step
        Then the system should display "Payment Plan" step
        Then the system should display "Review" step

    Scenario: Highlight current step in blue
        Then the "Start Application" step should be highlighted in blue

    Scenario: Display inactive steps in grey
        Then the "Payment Plan" step should be displayed in grey
        Then the "Review" step should be displayed in grey
