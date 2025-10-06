import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user fills in only the required fields on step one with valid information", async function () {
    await startApplicationPage.enterFirstName("Mike");
    await startApplicationPage.enterLastName("Trenton");
    await startApplicationPage.enterEmail("mike.trenton@example.com");
    await startApplicationPage.enterPhoneNumber("555-123-4567");
    
});
Given("user fills in all fields on step one with valid information", async function () {
    await startApplicationPage.enterFirstName("Mike");
    await startApplicationPage.enterLastName("Trenton");
    await startApplicationPage.enterEmail("mike.trenton@example.com");
    await startApplicationPage.enterPhoneNumber("555-123-4567");
    await startApplicationPage.selectHowDidYouHearAboutUs("Facebook");
});

When("user clicks the next button on step one", async function () {
    await startApplicationPage.clickNextButton();
});

Then("user should be navigated to step two", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)"
    );
});