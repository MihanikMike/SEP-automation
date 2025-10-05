import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


When("user enters an invalid card number", async function () {
    await reviewPaymentPage.enterCardNumber("1234567890123456");
});

When("user check the terns and conditions checkbox", async function () {
  
    await reviewPaymentPage.clickTermsAndConditionsCheckbox();
});

When("user enters a incomplete card number", async function () {
    await reviewPaymentPage.enterCardNumber("1234567890123456");
});

Then("the card number error message {string} is displayed", async function (string) {
    await expect(reviewPaymentPage.cardNumberErrorMessage).toHaveText(string);
  }
);