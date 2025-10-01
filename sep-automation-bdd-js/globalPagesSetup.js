import { LeftMainPage } from "./pages/LeftMainPage.js";
import { PaymentPlanPage } from "./pages/PaymentPlanPage.js";
import { StartApplicationPage } from "./pages/StartApplicationPage.js";
import { ReviewPaymentPage } from "./pages/ReviewPaymentPage.js";

// Import OTHER PAGES CLASSES HERE IF NEEDED...


/**
 * @type {import('./pages/LeftMainPage.js').LeftMainPage}
 */
export let leftMainPage;

/**
 * @type {import('./pages/PaymentPlanPage.js').PaymentPlanPage}
 */
export let paymentPlanPage;

/**
 * @type {import('./pages/StartApplicationPage.js').StartApplicationPage}
 */
export let startApplicationPage;

/**
 * @type {import('./pages/ReviewPaymentPage.js').ReviewPaymentPage}
 */
export let reviewPaymentPage;

/**
 * @type {import('playwright').Page}
 */
export let page;
// ADD OTHER PAGE CLASS REFERENCES HERE...


/**
 * Initializes the global page elements and instances for the automation framework.
 * 
 * @param {import('playwright').Page} argPage - The Playwright Page instance to be used for interacting with the web pages.
 * @returns {void} This function does not return any value.
 */
export const initElements = (argPage) => {
    page = argPage;
    leftMainPage = new LeftMainPage(page);
    paymentPlanPage = new PaymentPlanPage(page);
    startApplicationPage = new StartApplicationPage(page);
    reviewPaymentPage = new ReviewPaymentPage(page);
    // INITIALIZE PAGE INSTANCES HERE IF NEEDED...


};
