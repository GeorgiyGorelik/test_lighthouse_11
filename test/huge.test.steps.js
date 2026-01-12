import logger from "../logger/logger.js";
import HomePage from '../pages/demoqa/homePage.js';
import { beforeHook, beforeEachHook, afterEachHook, afterHook } from '../settings/mochaHooks.js';
import * as params from '../settings/testParams.js';

let browser;
const Home = new HomePage();

// Extend the common beforeHook with additional setup
const customBeforeHook = async () => {
    await beforeHook(); // Perform the common setup first (browser startup)
    browser = await params.getBrowserInstance();
    Home.init(browser.page); // Sets instance of puppeteer page to Home page object
};

// Specify all mocha hooks
before(customBeforeHook);
beforeEach(beforeEachHook);
afterEach(afterEachHook);
after(afterHook);

// it(`[ColdNavigation] Check ${Home.getURL()}`, async function () {
//     await Home.coldNavigation(browser)
// }).timeout(params.testTime);

// it("[WarmNavigation] Check Home URL", async function () {
//     await Home.warmNavigation(browser)
// }).timeout(params.testTime);

it(`[N]_Home`, async function () {
    await Home.coldNavigation(browser)
}).timeout(params.testTime);

it("[T]_Click_on_Elements", async function () {
    await Home.clickOnElements(browser)
}).timeout(params.testTime);