@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    #TODO: Create scenarios that cover all the acceptance criteria


    Background:
        Given user is on the enrollment page

    Scenario: Verify all personal detail fields are displayed correctly
        Then the First Name text field should be present
        And the Last Name text field should be present
        And the Email Address text field should be present
        And the Phone text field should be present
        When user enters invalid email into the Email Address field
        When user enters invalid into the Phone field
        Then the Next button should be disabled

    Scenario: Verify 'How did you hear about us?' dropdown is present and functional
        Then the How did you hear about us dropdown should be displayed
        And it should contain the standard list of options

   