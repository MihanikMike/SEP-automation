@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        Given the product information card is displayed

    Scenario: Displaying the product name on the information card
        Then the product name should be shown on the information card
    @sep09-1
    Scenario: Product name on the card matches product name on the left side
        Then the product name on the information card should match the product name on the left side of the screen

    Scenario: Displaying the price of the product
        Then the price of the product should be shown

    Scenario: Displaying the flexible payment plan text
        Then the information card should show the text "Flexible payments plan available" for products that support flexible payment plans

    Scenario: Displaying the program start date
        Then the program start date should be shown

    Scenario: Displaying the return policy and final return date
        Then both the return policy and the final date for returns should be shown