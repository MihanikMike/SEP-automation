@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order: 
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
    
    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.


    #TODO: Create scenarios that cover all the acceptance criteria
    
    Background:
        Given user is on the enrollment page

    Scenario: Header shows "Cydeo Secure Checkout"
        Then the page header should contain Cydeo Secure checkout

    Scenario: Program name is displayed on the product card
        Then the program name should be visible on the product info card

    Scenario: Footer (left) contains logo and policy links in order
        Then the footer left should contain a logo
        And the footer left should contain a link for "Terms and conditions"
        And the footer left should contain a link for "Privacy Policy"
        And the footer left should contain a link for "Disclaimer"
        And the footer left should contain a link for "Cookie Policy"

    Scenario: Footer (right) shows contact information
        Then the footer right should contain the text "Need help? Contact us at enrollment@cydeo.com"


