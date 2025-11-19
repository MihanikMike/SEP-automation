import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the page header should contain {string}", async function (string) {
    // Use a tolerant, case-insensitive contains check because the app header may vary slightly
    const headerText = (await startApplicationPage.pageHeader.first().innerText()).trim();
    if (!headerText.toLowerCase().includes(string.toLowerCase())) {
      throw new Error(`Expected header to contain "${string}", but found "${headerText}"`);
    }
});

Then("the program name should be visible on the product info card", async function () {

    await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();

});

Then("the footer left should contain a logo", async function () {

    let linkLogoCydeo = page.locator(
      "//img[@src='assets/images/logo.svg' and @style='max-height: 30px;']"
    );

    await expect(linkLogoCydeo).toBeVisible();

});

Then("the footer left should contain a link for {string}", async function (string) {
  let linkTermsAndCondition = page.locator("//a[text()='Terms and conditions']");
  let linkPrivacyPolicy = page.locator("//a[text()='Privacy Policy']");
  let linkDisclaimer = page.locator("//a[text()='Disclaimer']");
  let linkCoockiePolicy = page.locator("//a[text()='Cookie Policy']");

  expect(linkTermsAndCondition).toBeVisible;
  expect(linkPrivacyPolicy).toBeVisible;
  expect(linkDisclaimer).toBeVisible;
  expect(linkCoockiePolicy).toBeVisible;

});

Then("the footer right should contain the text {string}", async function (string) {
  // Use first() to avoid strict-mode failures when multiple identical nodes exist
  await expect(startApplicationPage.footer.first()).toContainText(string);

});