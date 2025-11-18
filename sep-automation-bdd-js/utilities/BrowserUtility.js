import { expect } from "@playwright/test";

export class BrowserUtility {

  // ADD YOUR OWN BROWSER UTILITY FUNCTIONS HERE...
  

  /**
   * Checks a checkbox element located by the provided locator.
   *
   * @param {import('playwright').Locator} locator - The locator for the checkbox element.
   * @returns {Promise<void>} - A promise that resolves when the checkbox is checked.
   */
  static async check(locator) {
    await locator.check();
    await expect(locator).toBeChecked();
  }

  /**
   * Unchecks a checkbox element located by the provided locator.
   *
   * @param {import('playwright').Locator} locator - The locator for the checkbox element.
   * @returns {Promise<void>} - A promise that resolves when the checkbox is unchecked.
   */
  static async uncheck(locator) {
    await locator.uncheck();
    await expect(locator).not.toBeChecked();
  }

  /**
   * Verifies the title of a page matches the expected value.
   *
   * @param {import('playwright').Page} page - The page object.
   * @param {String} expected - The expected title of the page.
   * @returns {Promise<void>} - A promise that resolves when the title matches the expected value.
   */
  static async verify_title(page, expected) {
    const actual = await page.title();
    expect(actual).toBe(expected);
  }

  /**
   * Enters input into an input field located by the provided locator.
   * Throws an error if the element is not visible.
   *
   * @param {import('playwright').Locator} locator - The locator for the input field.
   * @param {String} input - The input to be entered.
   * @returns {Promise<void>} - A promise that resolves when the input is entered.
   */
  static async enter_input(locator, input) {
    if (await locator.isVisible()) {
      await locator.fill(input);
    } else {
      throw new Error(`Element is not visible: ${locator}`);
    }
  }

}