const { test, expect } = require('@playwright/test');

test('cookies can be accepted', async ({page}) => {

    await page.goto('https://justjoin.it');

    //accept cookies
    await page.waitForSelector('#cookiescript_accept');
    await page.click('#cookiescript_accept');

});

test('all cookies can be declined via cookie manager', async ({page}) => {

    //open website
    await page.goto('https://justjoin.it');

    //open cookies manager
    await page.waitForSelector('#cookiescript_manage');
    await page.click('#cookiescript_manage');

    //cookies manager opened confirmation
    await page.waitForSelector('.cookiescript_fsd_description');

    //wait for 'DECLINE ALL' button and click.
    await page.waitForSelector('#cookiescript_reject');
    await page.click('#cookiescript_reject');

});

test('all cookies can be accepted via cookie manager', async ({page}) => {

    //open website
    await page.goto('https://justjoin.it');

    //open cookies manager
    await page.waitForSelector('#cookiescript_manage');
    await page.click('#cookiescript_manage');

    //cookies manager opened confirmation
    await page.waitForSelector('.cookiescript_fsd_description');

    //wait for 'ACCEPT ALL' button and click.
    await page.waitForSelector('#cookiescript_accept');
    await page.click('#cookiescript_accept');

});