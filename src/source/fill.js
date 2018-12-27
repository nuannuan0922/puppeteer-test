module.exports = async (page) => {
  page.on('console', msg => {
    for (let i = 0; i < msg.args().length; ++i)
      console.log(`${i}: ${msg.args()[i].asElement()}`);
  });

  await page.focus('#xiaoqu');
  await page.waitForSelector('#xiaoqu')
    .then(ele => {
      ele.press('KeyW', {
        text: '万源新城'
      })
    })
  await page.waitForSelector('#xiaoqu + div.tooltip ul li:nth-child(1)')
    .then(async (element) => { await element.click();})
  await page.type('#huxingshi', '1')
  await page.type('#huxingting', '1')
  await page.type('#huxingwei', '1')
  await page.type('#area', '23')
  await page.type('#Floor', '1')
  await page.type('#zonglouceng', '10')
  await page.click('div[name=dianti]')
  await page.waitForSelector('div[name=dianti] div.optiondef ul li:nth-child(2)')
    .then(async (element) => { await element.click();})
  await page.click('div[name=chewei]', {delay: 100})
  await page.waitForSelector('div[name=chewei] .optiondef ul li:nth-child(2)')
    .then(async (element) => { await element.click();})
  await page.type('#MinPrice', '6000')
  await page.click('div[name=ruzhushijian] .input_date_title')
  await page.waitForSelector('#datepicker_21 .ui-datepicker-today', {visible: true})
    .then(async (element) => { await element.click();})
  const mainFrame = await page.mainFrame()
  let frames = await mainFrame.childFrames()
  let frame = frames[4]
  await frame.type('body', 'asdf你好吗？我不好。我好好地，你为什么问我好不好')
  // await frame.setContent('<span style="background-color: rgb(247, 150, 70);">asdfas<span style="background-color: rgb(247, 150, 70); color: rgb(255, 255, 255);">dfa<span style="background-color: rgb(247, 150, 70);">sdfa123sdf你好吗？我不太好</span></span></span><p> </p>');
  await page.$('#imgUpload input')
    .then(ele => {
      ele.uploadFile('C:\\Users\\huocq\\Downloads\\微信截图_2.png')
    })
  await page.type('#goblianxiren', '零零妖')
  await page.click('.submit_wrap span')
}