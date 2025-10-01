import { Before, After, setWorldConstructor, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, firefox, webkit } from "@playwright/test";
import { initElements } from "../globalPagesSetup.js";
import fs from 'fs';
import path from 'path';

const BROWSER_TYPE = "chrome";
const HEADLESS_MODE = false;
const MAXIMIZED_WINDOW = true;
const SLOW_MOTION_DELAY = 0; // slow mode in milliseconds
const DEFAULT_TIMEOUT = 10000; // default timeout in milliseconds


/**
 * This function is executed before each Cucumber scenario. It initializes the browser and page objects.
 *
 * @returns {Promise<void>} - A promise that resolves when the initialization is complete.
 */
Before(async function () {
  await this.init();
});

/**
 * This function is executed after each Cucumber scenario. It takes a screenshot of the current page if the scenario fails.
 *
 * @param {import('@cucumber/cucumber').ScenarioResult} scenario - The result of the executed Cucumber scenario.
 * @returns {Promise<void>} - A promise that resolves when the screenshot is taken or when the scenario is not failed.
 */
After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    await takeScreenshot(this.page, scenario.pickle.name);
  }
  await this.close();
});



/**
 * This function takes a screenshot of the current page when a Cucumber scenario fails.
 *
 * @param {import('@playwright/test').Page} page - The Playwright Page object representing the current page.
 * @param {string} scenarioName - The name of the failed Cucumber scenario.
 *
 * @returns {Promise<void>} - A promise that resolves when the screenshot is taken.
 */
async function takeScreenshot(page, scenarioName) {
  if (!page) {
    console.warn('Page object not available, skipping screenshot');
    return;
  }

  const screenshotsDir = path.join(process.cwd(), 'reports', 'screenshots');
  fs.mkdirSync(screenshotsDir, { recursive: true });

  const currentDateTime = new Date().toISOString().replace(/[:T.]/g, '_').slice(0, -5);
  const fileName = `${scenarioName.replace(/\s+/g, '_')}_${currentDateTime}.png`;
  const filePath = path.join(screenshotsDir, fileName);

  await page.screenshot({ path: filePath, fullPage: true });
}

/**
 * CustomWorld class representing the world context for Cucumber tests.
 * It initializes and manages the browser and page objects for each scenario.
 */
class CustomWorld {

  /**
   * Initializes a new browser instance based on the specified browser type.
   *
   * @returns {Promise<import('@playwright/test').Browser>} - A promise that resolves with the launched browser instance.
   */
  async initializeBrowser() {
    const launchOptions = {
      headless: HEADLESS_MODE,
      slowMo: SLOW_MOTION_DELAY,
      args: MAXIMIZED_WINDOW && BROWSER_TYPE.toLowerCase() === "chrome" ? ["--start-maximized"] : [],
    };

    const browserType = BROWSER_TYPE.toLowerCase();
    return await (browserType === "firefox" ? firefox : browserType === "webkit" || browserType === "safari" ? webkit : chromium).launch(launchOptions);
  }

  /**
   * Initializes the browser, context, and page objects for each scenario.
   *
   * @returns {Promise<void>} - A promise that resolves when the initialization is complete.
   */
  async init() {
    this.browser = await this.initializeBrowser();
    this.context = await this.browser.newContext(MAXIMIZED_WINDOW ? { viewport: null } : {});
    this.page = await this.context.newPage();

    if (MAXIMIZED_WINDOW) {
      await this.page.setViewportSize(await this.page.evaluate(() => ({
        width: window.screen.availWidth,
        height: window.screen.availHeight,
      })));
    }

    initElements(this.page);
  }

  /**
   * Closes the browser and page objects after each scenario.
   *
   * @returns {Promise<void>} - A promise that resolves when the browser and page are closed.
   */
  async close() {
    await Promise.all([
      this.page?.close().catch(err => console.warn('Error closing page:', err)),
      this.browser?.close().catch(err => console.warn('Error closing browser:', err))
    ]);
  }
}

// Set the CustomWorld class as the world constructor for Cucumber tests
setWorldConstructor(CustomWorld);

// Set the default timeout for Cucumber scenarios
setDefaultTimeout(DEFAULT_TIMEOUT);
