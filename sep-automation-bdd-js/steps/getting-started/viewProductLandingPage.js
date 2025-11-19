import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, leftMainPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then(
  "the page header should contain Cydeo Secure checkout", async function () {
    // Logo should be visible and header should contain the expected text
    await expect(leftMainPage.cydeoImageAtLeftWindow).toBeVisible();
    await expect(leftMainPage.secureCheckout).toContainText("Secure checkout");
  }
);

Then("the program name should be visible on the product info card", async function () {
  await expect(leftMainPage.programName).toBeVisible();
  await expect(leftMainPage.programName).toContainText(productInfo.programName);

});

Then("the footer left should contain a logo", async function () {

    let linkLogoCydeo = page.locator(
      "//img[@src='assets/images/logo.svg' and @style='max-height: 30px;']"
    );

    await expect(linkLogoCydeo).toBeVisible();

});

Then("the footer left should contain a link for {string}", async function (string) {
  
  const link = leftMainPage.footerElements.filter({ hasText: string });
  const count = await link.count();
  if (count === 0) {
    throw new Error(
      `Expected a footer link containing "${string}", but none was found`
    );
  }
  await expect(link.first()).toBeVisible();

});

Then("the footer right should contain the text {string}", async function (string) {
  // Use first() to avoid strict-mode failures when multiple identical nodes exist
  await expect(startApplicationPage.footer.first()).toContainText(string);

});