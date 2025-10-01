// Import the required 'fs' module to read the file
import { readFileSync } from 'fs';

/**
 * @typedef {Object} PriceData
 * @property {boolean} active
 * @property {number} baseAmount
 * @property {string} type
 * @property {boolean} upfrontDiscount
 * @property {number} upfrontDiscountAmount
 * @property {boolean} allowCoupons
 * @property {number} couponDiscount
 * @property {number} [numberOfInstallments]
 */
class Price {
  /**
   * @param {PriceData} priceData
   */
  constructor({
    active,
    baseAmount,
    type,
    upfrontDiscount,
    upfrontDiscountAmount,
    allowCoupons,
    couponDiscount,
    numberOfInstallments
  }) {
    this.active = active;
    this.baseAmount = baseAmount;
    this.type = type;
    this.upfrontDiscount = upfrontDiscount;
    this.upfrontDiscountAmount = upfrontDiscountAmount;
    this.allowCoupons = allowCoupons;
    this.couponDiscount = couponDiscount;
    this.numberOfInstallments = numberOfInstallments || null;
  }
}

/**
 * @typedef {Object} ProductData
 * @property {boolean} available
 * @property {string} productName
 * @property {string} productId
 * @property {boolean} teen
 * @property {string} type
 * @property {string} programId
 * @property {string} programCode
 * @property {string} programName
 * @property {string} startDate
 * @property {string} refundDate
 * @property {string} externalUrl
 * @property {string} terms
 * @property {PriceData[]} prices
 */
class Product {
  /** @type {Price[]} */
  prices;

  /**
   * @param {ProductData} productData
   */
  constructor({
    available,
    productName,
    productId,
    teen,
    type,
    programId,
    programCode,
    programName,
    startDate,
    refundDate,
    externalUrl,
    terms,
    prices
  }) {
    this.available = available;
    this.productName = productName;
    this.productId = productId;
    this.teen = teen;
    this.type = type;
    this.programId = programId;
    this.programCode = programCode;
    this.programName = programName;
    this.startDate = startDate;
    this.refundDate = refundDate;
    this.externalUrl = externalUrl;
    this.terms = terms;
    this.prices = prices.map(price => new Price(price));
  }
}

// Instantiate the Product object
export const productInfo = new Product(JSON.parse(readFileSync('./data/qa_data.json', 'utf8')));






