const puppeteer = require('puppeteer');
let create = require('./create');
let util = require('./util.js');

(async () => {
  let browser = await puppeteer.launch({
    // 若是手动下载的chromium需要指定chromium地址, 默认引用地址为 /项目目录/node_modules/puppeteer/.local-chromium/
    // executablePath: './node_modules/puppeteer/.local-chromium/win64-609904/chrome-win/chrome',
    //设置超时时间
    timeout: 1500,
    //如果是访问https页面 此属性会忽略https错误
    ignoreHTTPSErrors: true,
    // 打开开发者工具, 当此值为true时, headless总为false
    devtools: false,
    // 关闭headless模式, 不会打开浏览器
    headless: false,
    slowMo:250
  })

  let page = await browser.newPage(); 
  page.setDefaultNavigationTimeout(400000);
  // page.setViewport({
  //   width: 1366,
  //   height: 1000
  // })
  await page.goto('https://sh.58.com/');
  // let cookie = 'commontopbar_new_city_info=2%7C%E4%B8%8A%E6%B5%B7%7Csh; commontopbar_ipcity=sh%7C%E4%B8%8A%E6%B5%B7%7C0; id58=c5/nn1wQswxMal4aEpgQAg==; 58tj_uuid=487db85c-be9e-4cad-9255-6edd154ee564; new_uv=1; utm_source=; spm=; init_refer=; als=0; xxzl_deviceid=iqIaXM8MNk4PfXpBAfSFnIwmmwJIZJ%2B3MuUHM6nEKnbP9e%2BpgoDmt4XeVPFn78Js; 58home=sh; city=sh; new_session=0; ppStore_fingerprint=44E9A847D157307F4F178AB665FD932B635BAB81283F3003%EF%BC%BF1544598314636; PPU="UID=25225001282310&UN=ebewp_f5&TT=908bbbd4c3b11a7ebc2190efc02bf84a&PBODY=Rj87pKQdZUeE9crkFqlib3kngvCsAgbT5RENpymib6e-fXCCTDOPNVGDNUm_hbo1X4qEwyctDqEJ79GRMcF_k7YnRzQge7C4umVvjUkamZzi-0Uvm02qUrCHlgqfM0r1gg_EiwdBQ_pj7iMOgF0AP60Ipojbo7wfXxVDdbs6xtQ&VER=1"; www58com="UserID=25225001282310&UserName=ebewp_f5"; 58cooper="userid=25225001282310&username=ebewp_f5"; 58uname=ebewp_f5; post_uuid=885c5dfb-8b5b-40a0-a211-16282b1460a0; xxzl_smartid=9c90c9f69e8b29a95923e285c03e60ff'
  // if (cookie) {
  //   await page.setCookie(util.cookieStrToObject(cookie))
  //   await create(page);
  // } else {
    await page.goto('https://passport.58.com/login/')

    await page.waitForSelector('#pwdLogin')
      .then(async (ele) => {
        await ele.click()
      })
    await page.click('#loginBoxTitle li:nth-child(1)', {delay: 30})
  
    await page.type('#usernameUser', '******', {delay: 0})
    await page.type('#passwordUserText', 'abc123', {delay: 0})
  
    await page.click('#btnSubmitUser')
  
    await page.waitForSelector('#pptmobilecoderesendbtn', {timeout: 5000})
      .then(async () => {
        await page.click('#pptmobilecoderesendbtn')
      })
      .catch(async () => {
        await create(page);
      })
  // }

})()