import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


Given('the product information card is displayed', async function () {
  
    await expect(startApplicationPage.productInfoCard).toBeVisible();
});

Then('the product name should be shown on the information card', async function () {
  
    await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
});

Then('the product name on the information card should match the product name on the left side of the screen', async function () {

    const programNameOnInfoCard = await startApplicationPage.programNameOnInfoCard.innerText();
    const programNameOnLeftSide = await startApplicationPage.programNameOnLeftSide.innerText();

    
    console.log(`InfoCard name: "${programNameOnInfoCard}", Left side name: "${programNameOnLeftSide}"`);

    
    expect(programNameOnInfoCard).toBe(programNameOnLeftSide);

});

Then('the price of the product should be shown', async function () {
  
    await expect(startApplicationPage.programPrice).toBeVisible();

});

Then('the information card should show the text {string} for products that support flexible payment plans', async function (string) {
    await expect(startApplicationPage.flexiblePaymentsPlanAvailableText).toHaveText(string);
});

Then('the program start date should be shown', async function () {
  
    await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then('both the return policy and the final date for returns should be shown', async function () {
  
    await expect(startApplicationPage.refundPolicy).toBeVisible();
    await expect(startApplicationPage.refundEndDate).toBeVisible();;
});