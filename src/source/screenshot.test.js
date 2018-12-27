const puppeteer = require('puppeteer');

(async () => {
  const browser = await (puppeteer.launch({
    // 若是手动下载的chromium需要指定chromium地址, 默认引用地址为 /项目目录/node_modules/puppeteer/.local-chromium/
    executablePath: './node_modules/puppeteer/.local-chromium/win64-609904/chrome-win/chrome',
    //设置超时时间
    timeout: 15000,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: false,
    // 关闭headless模式, 不会打开浏览器
    headless: false
  }));
  const page = await browser.newPage();
  await page.goto('https://passport.58.com/login/');
  await page.screenshot({
    path: './src/assets/images/58_index.png',
    type: 'png',
    // quality: 100, 只对jpg有效
    fullPage: true,
    // 指定区域截图，clip和fullPage两者只能设置一个
    // clip: {
    //   x: 0,
    //   y: 0,
    //   width: 1000,
    //   height: 40
    // }
  });
  browser.close();
})();