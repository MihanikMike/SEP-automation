import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user is on the enrollment page", async function () {});

And("user enters valid information for all fields", async function () {});

And("user enters valid information for required fields", async function () {});

Then("user should be able to click the next button on step 1", async function (int) {});