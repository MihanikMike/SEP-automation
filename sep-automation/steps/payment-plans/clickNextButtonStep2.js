import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";



Then("the next button on step two should be disabled be default", async function () {
    await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
});

When("user selects upfront payment plan", async function () {
    await paymentPlanPage.selectPaymentPlan("upfront");
});

Then("the next button on step two should be enabled", async function () {
    await expect(paymentPlanPage.activeNextButton).toBeEnabled();
});