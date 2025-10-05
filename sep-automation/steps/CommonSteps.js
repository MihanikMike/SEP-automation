import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup.js";


Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});

Given("user completed the start application  step", async function () {
  await startApplicationPage.enterFirstName("Mike");
  await startApplicationPage.enterLastName("Trenton");
  await startApplicationPage.enterEmail("mike.trenton@example.com");
  await startApplicationPage.enterPhoneNumber("555-123-4567");
  await startApplicationPage.selectHowDidYouHearAboutUs("Email");
  await startApplicationPage.clickNextButton();

});

Given("user completed the paymant plan step", async function () {
  await paymentPlanPage.selectPaymentPlan("upfront");
  await paymentPlanPage.clickNextButton();
});

