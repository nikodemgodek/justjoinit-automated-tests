const { test, expect } = require('@playwright/test');

test('incorrect input should not find any offer', async ({page}) => {

    await page.goto('https://justjoin.it');
    //accept cookies
    await page.waitForSelector('#cookiescript_accept');
    await page.click('#cookiescript_accept');

    //focus input search
    const searchLocator = await page.getByPlaceholder("Search");
    await searchLocator.waitFor();
    await searchLocator.fill("asdkjhdfugdfu324982uyssa");
    await searchLocator.press("Enter");

    await page.waitForSelector('//p[contains(text(), "We did not find any offers for the above search criteria.")]');
    
});