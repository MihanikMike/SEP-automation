@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user completed the start application  step

    @sep16-1
    Scenario: Verify that the next button is active when the plan is selected 
        Then the next button on step two should be disabled be default 
        When user selects upfront payment plan
        Then the next button on step two should be enabled

    @sep16-2
    Scenario: Verify that step one and step two stepper are green and step three is blue after clicking on the next button
        Then step one stepper should be green
        And step two stepper should be blue
        When user selects upfront payment plan
        And user clicks the next button on payment plan page
        Then step one stepper should be green
        And step two stepper should be green
        And step three stepper should be blue
    @sep16-3
    Scenario: Verify that the payment summary is displayed after clicking a payment plan
        When user selects upfront payment plan
        Then the upfront payment summary should be displayed
        When user selects installments payment plan
        Then the installment payment summary should be displayed

    @sep16-4
    Scenario: Verify that the back button is displayed on payment plan page and navigates to start application step when clicked
        Then the back button is displayed on the payment plan page
        And the back button is enabled on the payment plan page
        When uset clicks the back button on payment plan page
        Then step one stepper should be blue
        


