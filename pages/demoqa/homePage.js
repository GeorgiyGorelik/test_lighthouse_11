import Page from "../../core/page.js";
import Button from "../../core/elements/button.js";

export default class HomePage extends Page {
    constructor(page) {
        super(page)
        this.setPath('/');
    }

    init(page) {
        super.init(page)
        this.button = new Button('//a[contains(text(), "File Upload")]', page)
    }

    /**
    @example
    // Given: I am on the Home page
    // When: I click on "Elements"
    // Then: I wait for the new page to be rendered
    // And: I stop measuring action time performance of the page
    */
    async clickOnElements(browser) {
        await browser.timespan("Click on 'Elements'", async () => {
            await this.button.click()
            await browser.waitTillRendered()
        })
    }

}