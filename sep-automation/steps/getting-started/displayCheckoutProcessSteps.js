import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the system should display {string} step", async function (stepName) {
  let element;

  switch (stepName) {
    case "Start Application":
      element = startApplicationPage.startApplicationText;
      break;
    case "Payment plan":
      element = startApplicationPage.paymentPlanText;
      break;
    case "Review":
      element = startApplicationPage.reviewText;
      break;
    default:
      throw new Error(`Unknown step name: ${stepName}`);
  }

  await expect(element).toBeVisible();
  await expect(element).toHaveText(stepName);
});


Then(
  "the Start Application step should be highlighted in blue",
  async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)"
    );
  }
);

Then("the Payment Plan step should be displayed in grey", async function () {
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
      "color",
      "rgb(217, 226, 236)"
    );
  }
);

Then("the Review step should be displayed in grey", async function () {
  await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
    "color",
    "rgb(217, 226, 236)"
  );
});

Then("the stepper should display all three steps in correct order", async function () {
    
   const stepOne = await startApplicationPage.startApplicationText.innerText();
   const stepTwo = await startApplicationPage.paymentPlanText.innerText();
   const stepThree = await startApplicationPage.reviewText.innerText();

   expect(stepOne).toBe("Start Application");
   expect(stepTwo).toBe("Payment plan");
   expect(stepThree).toBe("Review");
  }
);