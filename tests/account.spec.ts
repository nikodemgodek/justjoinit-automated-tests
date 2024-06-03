const { test, expect } = require('@playwright/test');

test('sign in to candidate profile using email address and log out', async ({page}) => {
    await page.goto('https://justjoin.it');
    //accept cookies
    await page.waitForSelector('#cookiescript_accept');
    await page.click('#cookiescript_accept');

    //click 'Sign in' button
    const SIGN_IN_BUTTON_LOCATOR = '//button//div[contains(text(), "Sign in")]';
    await page.waitForSelector(SIGN_IN_BUTTON_LOCATOR);
    await page.click(SIGN_IN_BUTTON_LOCATOR);

    //wait and click 'sign in to candidate's profile' button

    const SIGN_IN_AS_CANDIDATE_BUTTON_LOCATOR = `//button//p[contains(text(), "Sign in to Candidate's profile")]`;
    await page.locator(SIGN_IN_AS_CANDIDATE_BUTTON_LOCATOR);
    await page.click(SIGN_IN_AS_CANDIDATE_BUTTON_LOCATOR);

    //wait for sign in/up page
    const SIGN_IN_VIA_EMAIL_BUTTON_LOCATOR = '//button//div[contains(text(), "Sign in using address email")]';
    await page.waitForSelector(SIGN_IN_VIA_EMAIL_BUTTON_LOCATOR);
    await page.click(SIGN_IN_VIA_EMAIL_BUTTON_LOCATOR);

    //wait for credentials inputs on 'Sign in to account' page
    await page.getByPlaceholder('name@domain.com');
    await page.getByPlaceholder('At least 8 characters');

    //fill credentials
    const locator = page.locator('input[placeholder="name@domain.com"]');
    await locator.waitFor();
    await locator.fill('nikodem.10@o2.pl');

    const locatorPassword = page.locator('input[placeholder="At least 8 characters"]');
    await locatorPassword.waitFor();
    await locatorPassword.fill('TestPassword123!');

    //submit login
    const ACTIVE_BUTTON_SUBMIT_LOCATOR = '//form//div//button/div[contains(text(), "Sign in")]';
    await page.waitForSelector(ACTIVE_BUTTON_SUBMIT_LOCATOR);
    await page.click(ACTIVE_BUTTON_SUBMIT_LOCATOR);

    //wait for my profile
    const MY_PROFILE_DROPDOWN_LOCATOR = '//button//div//span[contains(text(), "My profile")]';
    const myProfileLocator = await page.locator(MY_PROFILE_DROPDOWN_LOCATOR);
    await myProfileLocator.waitFor();

    //handle logout
    const LOGOUT_BUTTON_LOCATOR = '//span[contains(text(), "Log out")]';
    await page.waitForSelector(LOGOUT_BUTTON_LOCATOR);
    await page.click(LOGOUT_BUTTON_LOCATOR);

    //wait for sign in page
    await page.waitForSelector(SIGN_IN_VIA_EMAIL_BUTTON_LOCATOR);
    

});