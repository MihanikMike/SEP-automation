import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import {
  paymentPlanPage,
  startApplicationPage,
  page,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";




Then(
  "the next button on step two should be disabled be default",
  async function () {
    await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
  }
);

When("user selects upfront payment plan", async function () {
  await paymentPlanPage.selectPaymentPlan("upfront");
});

Then("the next button on step two should be enabled", async function () {
  await expect(paymentPlanPage.activeNextButton).toBeEnabled();
});

Then("step one stepper should be green", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)"
  );
});

Then("step two stepper should be blue", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)"
  );
});

When("user clicks the next button on payment plan page", async function () {
  await paymentPlanPage.clickNextButton();
});

Then("step two stepper should be green", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)"
  );
});

Then("step three stepper should be blue", async function () {
  await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)"
  );
});


Then("the upfront payment summary should be displayed", async function () {
    await expect(paymentPlanPage.basePriceAmountUnderUpfront).toBeVisible();
    await expect(paymentPlanPage.upfrontDiscountAmountUnderUpfront).toBeVisible();
    await expect(paymentPlanPage.subtotalAmountUnderUpfront).toBeVisible();

});

When("user selects installments payment plan", async function () {

    await paymentPlanPage.selectPaymentPlan("installments");
});

Then("the installment payment summary should be displayed", async function () {

    await expect(paymentPlanPage.basePriceAmountUnderInstallments).toBeVisible();
    await expect(paymentPlanPage.installmentsNumberUnderInstallments).toBeVisible();
    await expect(paymentPlanPage.pricePerInstallmentsAmountUnderInstallments).toBeVisible();
    await expect(paymentPlanPage.firstMonthPaymentAmountUnderInstallments).toBeVisible();
  }
);

Then("the back button is displayed on the payment plan page", async function () {
    await expect(paymentPlanPage.backButton).toBeVisible();
}
);

Then("the back button is enabled on the payment plan page", async function () {
    await expect(paymentPlanPage.backButton).toBeEnabled();
}
);

When("uset clicks the back button on payment plan page", async function () {
    await paymentPlanPage.backButton.click();
});

Then("step one stepper should be blue", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)"
    );
});