// const puppeteer = require('puppeteer');
let fill = require('./fill');

module.exports = async (page) => {
  await page.goto('https://post.58.com/zufang/2/8/s5');
  // await page.waitForNavigation({
  //   waitUntil: 'load'
  // }),
  await page.waitForSelector("#realHouseClick", {timeout: 50000})
    .then(async (ele) => {
      await ele.click();
    });
  // await page.waitFor(5000);
  // await page.click('#realHouseClick');
  await page.click('#realHouseButton');
  await fill(page)
}