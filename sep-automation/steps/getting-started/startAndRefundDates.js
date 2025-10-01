import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
// Add your step definitions here


Given("user is on the enrollment page", async function () {});

Then("the program start date is displayed", async function () {});

Then("the program refund date is displayed", async function () {});

Then(
  "the displayed start date for the program is correct",
  async function () {}
);

Then(
  "the displayed refund date for the program is correct",
  async function () {}
);
