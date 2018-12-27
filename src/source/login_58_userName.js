const puppeteer = require('puppeteer');

(async () => {
  let browser = await puppeteer.launch({
    // 若是手动下载的chromium需要指定chromium地址, 默认引用地址为 /项目目录/node_modules/puppeteer/.local-chromium/
    // executablePath: './node_modules/puppeteer/.local-chromium/win64-609904/chrome-win/chrome',
    //设置超时时间
    timeout: 1500,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: true,
    // 关闭headless模式, 不会打开浏览器
    headless: false,
    slowMo:250
  })

  let page = await browser.newPage();
  await page.goto('https://passport.58.com/login/')

  await page.click('#pwdLogin', {
    delay: 30
  })
  await page.click('#loginBoxTitle li:nth-child(1)', {
    delay: 30
  })

  await page.type('#usernameUser', '******', {
    delay: 100
  })
  await page.type('#passwordUserText', 'abc123', {
    delay: 100
  })

  await page.click('#btnSubmitUser')

})()