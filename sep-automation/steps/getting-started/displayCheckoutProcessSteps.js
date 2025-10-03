import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the system should display {string} step", async function (stepName) {
  // Write code here to verify the step is displayed
  // Example: await expect(page.locator(`text=${stepName}`)).toBeVisible();
});

Then(
  "the {string} step should be highlighted in blue",
  async function (stepName) {
    // Write code here to verify the step is highlighted in blue
    // Example: await expect(page.locator(`[data-step="${stepName}"]`)).toHaveClass(/blue|active|current/);
  }
);

Then(
  "the {string} step should be displayed in grey",
  async function (stepName) {
    // Write code here to verify the step is displayed in grey
    // Example: await expect(page.locator(`[data-step="${stepName}"]`)).toHaveClass(/grey|inactive|disabled/);
  }
);

Then(
  "the stepper should display all three steps in correct order",
  async function () {
    // Write code here to verify all steps are displayed in correct order
    // Example:
    // const steps = await page.locator('[data-testid="stepper"] .step').allTextContents();
    // expect(steps).toEqual(['1-Start Application', '2-Payment Plan', '3-Review']);
  }
);